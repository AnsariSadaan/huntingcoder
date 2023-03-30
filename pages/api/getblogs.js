// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';
// type Data = {
//   name: string
// }

export default function handler(req, res
  // req: NextApiRequest,
  // res: NextApiResponse<Data>
) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
    res.status(200).json(JSON.parse(data))
  })
}
