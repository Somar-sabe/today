'use client'

import React from 'react'
import { LayoutOne } from '@/layouts'
import Interest from '@/components/intrest/intrest'
import Lead from '@/components/contactnew/LeadFormCard'

export default function MaritimeCity() {
  return (
    <LayoutOne topbar={true}>
      <div className="responsive-container">
        <Interest />
        <Lead />
      </div>

      <style jsx>{`
        .responsive-container {
          display: flex;
          justify-content: space-around;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </LayoutOne>
  )
}
