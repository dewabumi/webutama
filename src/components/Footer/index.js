import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FooterContainer,
         FooterWrap,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink} from './FooterElements'
import { SocialIcons,
         SocialLogo,
         SocialMedia,
         SocialMediaWrap,
         SocialIconLink,
         WebsiteRights} from './FooterElements'
import { animateScroll as scroll} from 'react-scroll'

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/home'>About Us</FooterLink>
                                <FooterLink to='/home'>Our Program</FooterLink>
                                <FooterLink to='/home'>Discount</FooterLink>
                                <FooterLink to='/home'>Testimonials</FooterLink>
                                <FooterLink to='/home'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/home'>Instagram</FooterLink>
                                <FooterLink to='/home'>Facebook</FooterLink>
                                <FooterLink to='/home'>Twitter</FooterLink>
                                <FooterLink to='/home'>Whatsapp</FooterLink>
                                <FooterLink to='/home'>Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Blog</FooterLinkTitle>
                                <FooterLink to='/home'>Our Blog</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Ganesha Operation
                        </SocialLogo>
                        <WebsiteRights> Ganesha Operation © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
