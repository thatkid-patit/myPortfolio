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

export const ProjectsContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;
    padding-right: 20px;
    padding-left: 20px;
`;
