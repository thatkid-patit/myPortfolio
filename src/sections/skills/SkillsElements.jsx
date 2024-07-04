import styled from "styled-components";

export const Container = styled.section`
    min-width: 360px;
    max-width: 1280px;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
`;

export const SectionTitle = styled.h1`
    margin-bottom: 80px;
`;

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 50px;
    padding-right: 50px;
    gap: 50px;
`;

export const Hr = styled.hr`
    width: 300px;
    margin: 50px;
    height: 1px;
    border: none;
    background-color: var(--text-color);
`;

