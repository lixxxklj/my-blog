import { Webhook } from 'svix'
import User from '../models/user.js'

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET
  if(!WEBHOOK_SECRET) {
    throw new Error("webhook不存在！")
  }

  const payload = req.body.toString();
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({
      msg: "webhook验证失败！"
    });
  }

  // console.log(evt.type);
  // console.log(evt.data);
  if(evt.type === "user.created") {
    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.name || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_img_url
    })
    // console.log(newUser);
    await newUser.save()
  }
  return res.status(200).json({
    msg: "创建成功"
  })
}