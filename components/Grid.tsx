import React from 'react'
import { gridItems } from '../data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id = "about">
      <BentoGrid>
            {gridItems.map(({id, title, description, className,
                  img, imgClassName, 
                  titleClassName, spareImg}) => ( // Use the girdItms variable
                  <BentoGridItem 
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgclassName={imgClassName}
                        titelClassName={titleClassName}
                        spareImg={spareImg}
                        />
            ))}
      </BentoGrid>
    </section>
  )
}

export default Grid