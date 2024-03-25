import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    max-width: 588px;
    margin: 0 auto 0;
    padding: 0 24px;

    > footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        width: 112px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 999;
        transition: all ease-in-out 0.5s;
    }

    > img:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 50px #939);
    }

    > span {
        font-weight: bolder;
    }
`;

export const Links = styled.div`
    > ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        list-style: none;
        padding: 24px 0;

        > li {
            border-radius: 20px;

            > a {
                display: flex;
                align-items: center;
                padding: 16px 24px;
                height: 30px;
                text-decoration: none;
                font-weight: 500;
                background-color: #939;
                color: white;
                justify-content: center;
                gap: 10px;
                transition: all ease-in-out 0.2s;
            }
        }    

        > li a:hover{
            transform: scale(1.1);
        }

        > li:hover {
            border-radius: 20px;
            filter: drop-shadow(0 0 5px #939);
        }
    }
`;