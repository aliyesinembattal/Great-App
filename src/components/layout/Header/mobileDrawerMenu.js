import { AlignRightOutlined } from "@ant-design/icons";
import { Divider, Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedin from "./assets/2722.svg";
import instagram from "./assets/2723.svg";
import facebook from "./assets/2724.svg";
import youtube from "./assets/2725.svg";

const MobileDrawerMenu = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <AlignRightOutlined
        className="menu-drawer"
        style={{ fontSize: "20px", width: "50px" }}
        w
        onClick={showDrawer}
      />
      <Drawer
        title={<div className="drawer-title">GREAT</div>}
        placement="right"
        onClose={onClose}
        width="100%"
        visible={visible}
      >
        <div className="menu-drawer">
          <Divider />
          <div className="links">
            <Link to="/howitworks">How It Works</Link>
          </div>
          <Divider />
          <div className="linkss">
            <Link to="/advantages">Advantages</Link>
          </div>
          <Divider />
          <div className="links">
            <Link to="/services">Services</Link>
          </div>
          <Divider />
          <div className="social-media">
            <img src={youtube} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={linkedin} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawerMenu;
