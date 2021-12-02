import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.footer`
    background-color: #101522;
`;

export const ProfileWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;
    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const ProfileDetails = styled.h1`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    text-align: center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width : 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

export const Subtitle = styled.p`
    max-width: 1100px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: center;
`;