import React from 'react'
import icon1 from '../../images/gambar10.png'
import icon2 from '../../images/gambar11.png'
import icon3 from '../../images/gambar12.png'
import { ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesCard,
         ServicesH2,
         ServicesIcons,
         ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Our Discount</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcons src={icon1} />
                        <ServicesH2>Diskon Anak Guru</ServicesH2>
                        <ServicesP>Untuk anak guru aja ya, anak dajjal engga.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcons src={icon2} />
                        <ServicesH2>Diskon Lunas</ServicesH2>
                        <ServicesP>Untuk yang bayar lunas aja ya, yang nyicil engga.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcons src={icon3} />
                        <ServicesH2>Diskon Rangking</ServicesH2>
                        <ServicesP>Untuk yang rangking aja ya, yang suka bolos engga.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
