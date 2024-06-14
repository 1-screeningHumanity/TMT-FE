import { getPaymentsLog } from '@/actions/payments'
import Footer from '@/components/ui/Footer'
import Headers from '@/components/ui/Headers'
import PaymentsLogBox from '@/components/ui/PaymentsLogBox'
import { PaymentsLogLists } from '@/lib/payments/PaymentsLogLists'
import React from 'react'

async function paymentsLog() {

  const data = await getPaymentsLog();
  const paymentsLogLists = data.data;

  return (
    <section>
      <Headers title="충전 내역"/>
      <div className='mb-40'>
        {PaymentsLogLists.map((log, index) => (
          <PaymentsLogBox createdAt={log.createdAt} payName={log.payName} totalAmount={log.totalAmount} key={index}/>
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default paymentsLog