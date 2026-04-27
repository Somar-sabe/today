'use client'

import React from 'react'
import { LayoutOne } from '@/layouts'
import Interest from '@/components/intrest/intrestru'
import Lead from '@/components/contactnewru/LeadFormCard'
export default function MaritimeCity() {
  return (
    <LayoutOne topbar={true}>
      <div className="responsive-container">
               <Lead />
        <Interest />
 
      </div>

      <style jsx>{`
        .responsive-container {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .responsive-container {
           flex-direction: column-reverse;
            
            align-items: center;
          }
        }
      `}</style>
    </LayoutOne>
  )
}
