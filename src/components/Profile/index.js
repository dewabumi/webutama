import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { ProfileContainer,
         ProfileWrap,
         SocialIcons,
         SocialLogo,
         ProfileDetails,
         SocialMedia,
         SocialMediaWrap,
         SocialIconLink,
         Subtitle} from './ProfileElements'
import Typical from 'react-typical';

const Profile = () => {
    return (
        <>
        <ProfileContainer id="about">
            <ProfileWrap>
                <SocialLogo to='/'>
                    About Us
                </SocialLogo>
                <ProfileDetails>
                    <h1>
                        {" "}
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "Bimbingan Belajar Terbaik dan Terbesar Se-Indonesia",
                                2000,
                                "Telah Meluluskan 43.000 Lebih Siswa Ke PTN Impian di Tahun 2021",
                                2000,
                                "Menerapkan Konsep Revolusi Belajar",
                                2000,
                                "Memiliki Konsep The King, Membantu Menyelesaikan Soal Lebih Tepat dan Cepat",
                                2000,
                                "Fasilitas Tutorial Service Time Untuk Belajar Tambahan Diluar KBM",
                                2000,
                                "Pengajar Ramah dan Akrab",
                                2000
                            ]}
                        />
                    </h1>
                </ProfileDetails>
                <Subtitle>
                    Bimbel Ganesha Operation merupakan lembaga bimbingan belajar terbaik dan terbesar di Indonesia. 
                    Berdiri sejak 2 Mei 1984 di Kota Bandung, saat ini Ganesha Operation telah tersebar di 265 kota di Indonesia, mulai dari Aceh hingga Ambon.
                </Subtitle>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>               
            </ProfileWrap>
        </ProfileContainer>
        </>
    )
}

export default Profile
