'use client'

import React from 'react'
import { LayoutOne } from '@/layouts'
import InterestAr from '@/components/intrest/intrestar'
import Lead from '@/components/contactnewar/LeadFormCard'
export default function MaritimeCity() {
  return (
    <LayoutOne topbar={true}>
      <div className="responsive-container">

        <Lead />
                <InterestAr />
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
