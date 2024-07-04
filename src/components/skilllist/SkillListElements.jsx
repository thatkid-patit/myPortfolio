import styled from "styled-components";
import { FaCheckSquare } from "react-icons/fa";

export const Skill = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    white-space: nowrap;
`;

export const CheckMark = styled(FaCheckSquare)`
    font-size: 20px;
    color: var(--text-color);
`;
