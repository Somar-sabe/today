import React, { useEffect, useState } from 'react'
import PropertyCard from '../shared/cards/PropertyCard'
import { getProjects } from '@/utils/routes'
import { useLocale } from 'next-intl'

const Related = ({ name }) => {
  const locale = useLocale()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getProjects({ Random: true, Page: 0, PageSize: 4 }, locale)
      setData(result?.Data || [])
    }

    fetchProjects()
  }, [locale])

  return (
    <div className="flex flex-col gap-4 w-full">
      <h4 className="title whitespace-nowrap">{name}</h4>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((listing, index) => (
          <PropertyCard
            key={listing?.Id}
            img={listing?.ImagePath ?? ''}
            href={`/off-plan/${listing?.Slug}`}
            name={listing?.Name}
            price={listing?.StartingPrice}
            location={listing?.Area?.Name ?? ''}
            stickers={listing?.Stickers}
          />
        ))}
      </div>
    </div>
  )
}

export default Related
