import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CFormGroup,
  CCol,
  CInputGroup,
  CInputGroupPrepend,
  CButton,
  CInput,
  CDropdownToggle,
  CImg, CDropdown, CDropdownMenu, CDropdownItem, CDropdownDivider, CCardBody,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

// routes config
import routes from '../routes';

// eslint-disable-next-line import/no-cycle
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from './index';
import searchIcon from '../assets/icons/search-icon.svg';

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
    dispatch({ type: 'set', sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
    dispatch({ type: 'set', sidebarShow: val });
  };

  return (
    <CHeader withSubheader className="h-65px">
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto w-50">
        <CFormGroup row className="mb-0 mr-0 ml-0 w-100">
          <CCol xl="20" lg="20" md="20" className="pl-4 w-100">
            <CInputGroup className="thm-search-input">
              <CInputGroupPrepend>
                <CButton type="button">
                  <img src={searchIcon} alt="search-icon" width={20} />
                </CButton>
              </CInputGroupPrepend>
              <CInput className="pl-0 w-50 custom-placeholder border-0" id="input1-group2" name="input1-group2" placeholder="Search sites, sensors or help" />
            </CInputGroup>
          </CCol>
        </CFormGroup>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownMssg />
        <div className="c-vr h-50"></div>
        <TheHeaderDropdown />
        <CDropdown>
          <CDropdownToggle className="c-header-nav-link" caret={false}>
            <div className="c-avatar">
              <CImg
                src="avatars/6.jpg"
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
          </CDropdownToggle>
        </CDropdown>
      </CHeaderNav>

    </CHeader>
  );
};

export default TheHeader;
