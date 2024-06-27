import { getPaymentsLog } from '@/actions/payments'
import Footer from '@/components/ui/Footer'
import Headers from '@/components/ui/Headers'
import PaymentsLogBox from '@/components/ui/PaymentsLogBox'
import TitleOfPages from '@/components/ui/TitleOfPages'
import { PaymentsLogLists } from '@/lib/payments/PaymentsLogLists'
import React from 'react'

async function paymentsLog() {

  const data = await getPaymentsLog();
  const paymentsLogLists = data?.data;

  return (
    <section>
      <TitleOfPages title='충전 내역'/>
      <div className='mb-40'>
        { paymentsLogLists.length == 0 ? <div className="text-center mt-5">충전 내역이 없습니다.</div> :
        paymentsLogLists.map((log : any, index : number) => (
          <PaymentsLogBox createdAt={log.createdAt} payName={log.payName} totalAmount={log.totalAmount} key={index}/>
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default paymentsLog