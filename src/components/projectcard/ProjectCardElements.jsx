import styled from "styled-components";

export const Link = styled.a`
    text-decoration: none;
    color: #222;
    transition: transform 200ms ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Thumbnail = styled.img`
    max-width: 250px;
    align-self: center;
    background-color: var(--project-card-bg);
    border-radius: 10px;
`;