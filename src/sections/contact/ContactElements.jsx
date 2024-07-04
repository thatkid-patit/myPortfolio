import styled from "styled-components";

export const Container = styled.section`
    min-width: 360px;
    max-width: 1280px;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
`;

export const SectionTitle = styled.h1`
    margin-bottom: 80px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;  
`;

export const FormGroup = styled.section`
    width: 700px;

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
    }
`;

export const Label = styled.label`
    color: var(--text-color);
`;

export const InputName = styled.input`
    width: 100%;
    height: 50px;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    background: var(--background-color);
    color: var(--form-text-color);

    &::placeholder {
        color: var(--form-text-color);
    }
`;

export const InputEmail = styled.input`
    width: 100%;
    height: 50px;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    background: var(--background-color);
    color: var(--form-text-color);

    &::placeholder {
        color: var(--form-text-color);
    }
`;

export const InputText = styled.textarea`
    width: 100%;
    height: 50px;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    background: var(--background-color);
    color: var(--form-text-color);
    height: 200px;
    resize: none;

    &::placeholder {
        color: var(--form-text-color);
    }
`;

export const InputSubmit = styled.input`
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
