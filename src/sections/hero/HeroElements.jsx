import styled from 'styled-components'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaTelegram , FaFacebookSquare , FaLinkedin} from "react-icons/fa";

export const Container = styled.section`
    min-width: 360px;
    max-width: 1280px;
    min-height: 100dvh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;

export const ProfilePicContainer = styled.div`
    position: relative;
    margin: 20px;
`;

export const ProfilePicture = styled.img`
    max-width: 380px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        max-width: 200px;
    }
`;

export const SunToggle = styled(MdLightMode)`
    position: absolute;
    right: 0;
    font-size: 25px;
    cursor: pointer;
    color: #222;
`;

export const MoonToggle = styled(MdDarkMode)`
    position: absolute;
    right: 0;
    font-size: 25px;
    cursor: pointer;
    color: #fff;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin: 20px;
`;

export const LinksContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Link = styled.a`

`;

export const Facebook = styled(FaFacebookSquare)`
    font-size: 40px;
    color: var(--text-color);
`;

export const Telegram = styled(FaTelegram)`
    font-size: 40px;
    color: var(--text-color);
`;

export const LinkedIn = styled(FaLinkedin)`
    font-size: 40px;
    color: var(--text-color);
`;

export const Description = styled.p`
    max-width: 28ch;
`;

export const CvDownload = styled.button`
    background-color: var(--btn-color);
    color: var(--btn-text-color);
    border: none;
    border-radius: 10px;
    width: 126px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    }
`;
