import { ChevronDown, ChevronLeft, Circle, CircleUser, CircleUserRound, LucideMenu, Router, User, UserRound } from "lucide-react";
import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/auth-context";
import SidebarRoot from "../components/sidebar-root";
import SidebarHref from "../components/sidebar-href";
import SidebarMenu from "../components/sidebar-menu";
import SidebarItem from "../components/sidebar-item";
import SidebarContent from "../components/sidebar-content";
import SidebarHamburguer from "../components/sidebar-hamburguer";
import If from "../base-components/if";
import AccordionTitle from "../components/accordion-title";
import Accordion from "../components/accordion";
import AccordionRoot from "../components/accordion-root";
import { useAppSelector } from "../utils/hooks/redux-hooks";
import Cookies from 'js-cookie';
import SidebarContext from "../base-components/sidebar-context";
import { USER_ROUTES } from "../config/routes-config";
import AccordionContext from "../base-components/accordion-context";
import ModalContext from '../base-components/modal-context'
import ModalRoot from '../base-components/modal-root'
import ModalOpen from '../base-components/modal-open'
import ModalClose from '../base-components/modal-close'
import Button from '../components/button'

function UserRouters() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()
  const title = useAppSelector(e => e.app.value.title)
  const cookies = Cookies.get();

  return (
    <If conditional={isAuthenticated}>
      <SidebarContext>
        <SidebarRoot>
          <SidebarMenu>
            <SidebarItem href={USER_ROUTES.PROFILE}>
              <div className="flex gap-3 items-start flex-col">
                <div className="flex gap-3 items-center">
                  <CircleUser className="w-7 h-7"></CircleUser>
                  <span className="overflow-auto text-ellipsis">
                    <p>
                      {cookies.name ?? "Nome não encontrado"}
                    </p>
                    <p className="text-xs">Ver perfil</p>
                  </span>
                </div>
              </div>
            </SidebarItem>
            <AccordionContext>
              <AccordionRoot>
                <AccordionTitle>
                  <SidebarItem menu disable commons={[USER_ROUTES.ACCOTUNS, USER_ROUTES.EMAILS]}>
                    <SidebarHref>
                      Teste
                    </SidebarHref>
                  </SidebarItem>
                </AccordionTitle>
                <Accordion>
                  <SidebarItem variation="accordion" href={USER_ROUTES.ACCOTUNS}>
                    <SidebarHref>Teste 1</SidebarHref>
                  </SidebarItem>
                  <SidebarItem variation="accordion" href={USER_ROUTES.EMAILS}>
                    <SidebarHref>Teste 2</SidebarHref>
                  </SidebarItem>
                </Accordion>
              </AccordionRoot>
            </AccordionContext>
            <ModalContext>
              <div className="flex-1 flex items-end w-full">
                <ModalOpen className="w-full h-fit">
                  <SidebarItem unselectable disable href="" >
                    <SidebarHref >Exit </SidebarHref>
                  </SidebarItem>
                </ModalOpen>
              </div>
              <ModalRoot>
                <div className='shadow-lg p-6 bg-zinc-200 flex flex-col gap-3 rounded border border-zinc-400'>
                  <p>Tem certeza que deseja sair?</p>
                  <div className='flex justify-between w-full mt-6 gap-3'>
                    <ModalClose callback={logout} className='flex justify-between flex-1'>
                      <Button>Sair</Button>
                    </ModalClose>
                    <ModalClose className='flex justify-between flex-1'>
                      <Button variation='red'>Cancelar</Button>
                    </ModalClose>
                  </div>
                </div>
              </ModalRoot>
            </ModalContext>
          </SidebarMenu>
          <SidebarContent>
            <div className=" z-30 h-12 justify-end top-0 left-0 absolute flex w-full bg-zinc-100 px-6 border-b items-center border-b-zinc-200  ">
              <div className="flex-1">
                <div className='flex w-full items-center gap-3 text-zinc-800'>
                  <div className='bg-zinc-300 flex items-center justify-center rounded-full w-7 h-7 center cursor-pointer hover:bg-zinc-200 transition-all' onClick={() => navigate(-1)}>
                    <ChevronLeft className='w-4 h-4 ' />
                  </div>
                  <h1 className=" font-semibold  text-">
                    {title}
                  </h1>
                </div>
              </div>
              <SidebarHamburguer>
                <LucideMenu className="w-7 h-7 text-zinc-800" />
              </SidebarHamburguer>
            </div>
            <Routes>
              <Route path={USER_ROUTES.ACCOTUNS} element={< div style={{ marginTop: 100 }}>account</div>} />
              <Route path={USER_ROUTES.EMAILS} element={< div style={{ marginTop: 100 }}>email</div>} />
            </Routes>
          </SidebarContent>
        </SidebarRoot>
      </SidebarContext>
    </If>
  );
}

export default UserRouters;
