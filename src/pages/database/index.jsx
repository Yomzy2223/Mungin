import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/MUNGINLogo.png";
import profileImg from "../../assets/images/profileImg.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import ModalMain from "../../components/Reusable components/ModalMain";
import { Link } from "react-router-dom";
import { getCrops, getCropsDetails } from "../../services/auth.service";
import { store } from "../../redux/store";
import { storeCropsDetails } from "../../redux/slices";

const Database = () => {
  // const [open, setOpen] = useState(false);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    handleCrops();
    handleCropsDetails();
  }, []);

  const handleCrops = async () => {
    let crops = await getCrops();
    setCrops(crops.map((crop, index) => ({ ...crop, id: index + 11 })));
    console.log(crops);
  };

  const handleCropsDetails = async () => {
    let details = await getCropsDetails();
    store.dispatch(storeCropsDetails(details));
    console.log(details);
  };

  return (
    <Container>
      <Header>
        <Top>
          <img src={logo} alt="" />
          <ProfileImg>
            <img src={profileImg} alt="" />
            <MdOutlineKeyboardArrowDown />
          </ProfileImg>
        </Top>
        <Middle>
          {/* {open && <ModalMain closeModal={setOpen} />} */}
          {/* <AnalyzeModal /> */}
          <MiddleLeft>
            <span>Show</span>
            <span>
              {crops?.length} <MdOutlineKeyboardArrowDown />
            </span>
          </MiddleLeft>
          <MiddleRight>
            <div>
              <input type="text" placeholder="Search Crop State..." />
              <span>
                <CiSearch />
              </span>
            </div>
            <button
            //  onClick={setOpen}
            >
              Analyze Crop Yield
            </button>
          </MiddleRight>
        </Middle>
      </Header>
      <Main>
        <div>
          <span> {crops?.length}</span>
          Search results
        </div>
        <table>
          <thead>
            <tr>
              <td>
                <span>
                  Crop <BsArrowDown />
                </span>
              </td>
              <td>
                <span>
                  Year <BsArrowDown />
                </span>
              </td>
              <td>
                <span>
                  Version
                  <BsArrowDown />
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            {crops?.map((crop, index) => (
              <tr key={index}>
                <CropName>
                  <Link to={`/database/${crop?.id}/profile`}>
                    {crop?.cropName}
                  </Link>
                </CropName>
                <td>
                  <Link to={`/database/${crop?.id}/profile`}>{"----"}</Link>
                </td>
                <td>
                  <Link to={`/database/${crop?.id}/profile`}>{"--"}</Link>
                </td>
                <More>
                  <AiOutlineMore />
                </More>
              </tr>
            ))}
          </tbody>
        </table>
      </Main>
    </Container>
  );
};

export default Database;

export const Container = styled.div`
  font-size: 14px;
  max-width: 1000px;
  margin: auto;
  padding-inline: clamp(15px, 2vw, 32px);
  color: #313131;
`;
export const Header = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(20px, 4vw, 48px);
  padding-block: clamp(20px, 4vw, 48px);
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.div`
  display: flex;
  gap: 8px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
export const MiddleLeft = styled.div`
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(8px, 1.2vw, 15px);
    border: 0.6px solid #e5e5e5;
    border-radius: 2px;

    :nth-of-type(2) {
      font-weight: 700;
    }
  }
`;
export const MiddleRight = styled.div`
  display: flex;
  gap: clamp(0px, 2vw, 32px);

  > div {
    position: relative;
    display: flex;

    > span {
      position: absolute;
      top: 35%;
      right: clamp(10px, 1.2vw, 15px);
    }
  }

  input {
    padding: clamp(8px, 1.2vw, 15px);
    border: 1px solid #e5e5e566;
    border-radius: 6px;
    max-width: 327px;
    min-width: 200px;
    width: 100%;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  button {
    display: flex;
    background-color: #17233c;
    color: white;
    padding: clamp(8px, 1.2vw, 15px);
    white-space: nowrap;
    border-radius: 4px;
  }
`;
export const Main = styled.div`
  div {
    span {
      font-weight: 700;
      margin-right: 5px;
    }
  }
  table {
    width: 100%;
    a {
      display: flex;
    }
  }
  thead {
    span {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    td {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 11px;
    }
  }
  td {
    padding-block: 16px;
    text-transform: capitalize;
  }
`;
export const More = styled.td`
  padding-top: 22px;
  float: right;
`;
export const CropName = styled.td`
  width: 60%;
  font-weight: 700;
  color: #75a843;
`;
