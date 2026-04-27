'use client'

import React from 'react'
import { LayoutOne } from '@/layouts'
import InterestIr from '@/components/intrest/intrextir'
import Lead from '@/components/contactnewir/LeadFormCard'
export default function MaritimeCity() {
  return (
    <LayoutOne topbar={true}>
      <div className="responsive-container">
               <Lead />
        <InterestIr />
 
      </div>

      <style jsx>{`
        .responsive-container {
          display: flex;
          justify-content: space-around;
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
