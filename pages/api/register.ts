import type { NextApiRequest, NextApiResponse } from 'next'

interface DataResponse {
  success: boolean
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  console.log(req.body)

  res.status(200).json({
    success: true,
    message: 'Usuário registrado com sucesso!'
  })
}
