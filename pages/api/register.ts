import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken } from '../../utils/getAccessToken'

interface DataResponse {
  success: boolean
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  if(req.method !== 'POST') {
    res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  if(!req.body.name || !req.body.email || !req.body.phone) {
    res.status(400).json({
      success: false,
      message: 'Bad request'
    })
  }

  const ENDPOINT = `${process.env.RD_ENDPOINT}/platform/events`

  const BODY = {
    event_type: 'CONVERSION',
    event_family: 'CDP',
    payload: {
      conversion_identifier: 'TAG_SAGAZ_CAPTURE_PAGE',
      name: req.body.name,
      email: req.body.email,
      personal_phone: req.body.phone
    }
  }

  const OPTIONS = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAccessToken()}`
    }
  }

  const response = await axios.post(ENDPOINT, BODY, OPTIONS)

  if(!response.data.hasOwnProperty('event_uuid')) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
  
  res.status(200).json({
    success: true,
    message: 'Usuário registrado com sucesso!'
  })
}
