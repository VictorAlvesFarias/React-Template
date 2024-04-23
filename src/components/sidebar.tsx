import React, { createContext, useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"

interface RootContainer {
    className: string,
    children: React.ReactNode
}

interface RootVariation extends Omit<RootContainer, "className"> {

}

interface RootComponent extends RootVariation {
    variation?: keyof typeof rootVariations
}

function RootContainer(props: RootContainer) {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

function Root(props: RootComponent) {
    const Component = rootVariations[props.variation ?? "default"]
    return (
        <Context>
            <Component {...props} />
        </Context>
    )
}

const rootVariations = {
    default: (props: RootVariation) =>
        <RootContainer {...props} className="flex flex-col md:flex-row w-screen h-screen" />
}

interface ContentContainer {
    className: string,
    children?: React.ReactNode
}

interface ContentVariation extends Omit<ContentContainer, "className"> {

}

interface ContentComponent extends ContentVariation {
    variation?: keyof typeof rootVariations
}

function ContentContainer(props: ContentContainer) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

function Content(props: ContentComponent) {
    const Component = contentVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

const contentVariations = {
    default: (props: ContentVariation) =>
        <ContentContainer {...props} className=" h-full flex-col md:flex-rol flex flex-1 center " />
}

interface MenuContainer {
    className: string,
    children: React.ReactNode
}

interface MenuVariation extends Omit<MenuContainer, "className"> {

}

interface MenuComponent extends MenuVariation {
    variation?: keyof typeof rootVariations
}

function MenuContainer(props: MenuContainer) {
    const { open, setOpen } = useContext(SidebarContext)

    return (
        <>
            <div className={'md:flex hidden ' + props.className}>
                {props.children}
            </div>
            <div className={`md:hidden fixed z-50 w-full flex top-0 h-screen transition-all duration-500 ${open ? "right-0" : "right-full"}`}>
                <div className={'flex md:hidden ' + props.className} role="dialog" aria-modal="true">
                    {props.children}
                </div>
                <div className={'flex-1 pr-12 w-full h-full'} onClick={() => setOpen(false)}>
                </div>
            </div>
            <div className={'flex-1 pr-12 z-40 fixed flex md:hidden  top-0 h-full w-full transition-all ' + (open ? "right-0 delay-0" : "right-full delay-500 ")}>
                <div className={'flex-1 pr-12  fixed  h-full w-full bg-black transition-all duration-500 ' + (open ? "opacity-30" : "opacity-0")}>
                </div>
            </div>
        </>
    )
}

function Menu(props: MenuComponent) {
    const Component = menuVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

const menuVariations = {
    default: (props: MenuVariation) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-gradient-to-b from-black to-zinc-900 gap-1"
        />
}

interface HrefContainer {
    className: string,
    children: React.ReactNode
}

interface HrefVariation extends Omit<HrefContainer, "className"> {

}

interface HrefComponent extends HrefVariation {
    variation?: keyof typeof rootVariations
}

function HrefContainer(props: HrefContainer) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

function Href(props: HrefComponent) {
    const Component = hrefVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

const hrefVariations = {
    default: (props: HrefVariation) =>
        <HrefContainer {...props} className="" />
}

interface ItemContainer {
    className: string
    children: React.ReactNode
    href: string
    selected: string
    onClick?: (e: any) => any
}

interface ItemVariation extends Omit<ItemContainer, "className" | "selected"> {

}

interface ItemComponent extends ItemVariation {
    variation?: keyof typeof itemVariations
}

function ItemContainer(props: ItemContainer) {
    const { selected } = useContext(SidebarContext)

    return (
        <Link
            onClick={props.onClick}
            to={props.href}
            className={selected.split("/")[1] == props.href.split("/")[1] ? props.selected : props.className}
        >
            {props.children}
        </Link>
    )
}

function Item(props: ItemComponent) {
    const Component = itemVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

const itemVariations = {
    default: (props: ItemVariation) =>
        <ItemContainer
            {...props}
            className="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-300 text-md cursor-pointer hover:bg-zinc-800 "
            selected="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-300 text-md cursor-pointer bg-zinc-800 "
        />,
    "spacing-top": (props: ItemVariation) =>
        <ItemContainer
            {...props}
            className="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-300 text-md cursor-pointer hover:bg-zinc-800 mt-auto"
            selected="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-300 text-md cursor-pointer bg-zinc-800 "
        />
}

interface HamburguerContainer {
    className: string,
    children: React.ReactNode
}

interface HamburguerVariation extends Omit<HamburguerContainer, "className"> {

}

interface HamburguerComponent extends HamburguerVariation {
    variation?: keyof typeof itemVariations
}

function HamburguerContainer(props: HamburguerContainer) {
    const { setOpen, open } = useContext(SidebarContext)
    return (
        <div onClick={() => setOpen(!open)} className={props.className}>
            {props.children}
        </div>
    )
}

function Hamburguer(props: HamburguerComponent) {
    const Component = hamburguerVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

const hamburguerVariations = {
    default: (props: HamburguerVariation) =>
        <HamburguerContainer {...props} className=" z-30 p-2 flex-1 justify-end  top-0 left-0 md:hidden flex w-full bg-zinc-800 " />
}

interface ContextType {
    open: boolean
    setOpen: (e: boolean) => any
    selected: string
}

interface ContextComponent {
    children: React.ReactNode
}

function Context(props: ContextComponent) {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const context: ContextType = {
        open: open,
        setOpen: (e) => { setOpen(e) },
        selected: pathname
    }

    return <SidebarContext.Provider value={context} children={props.children} />
}

const SidebarContext = createContext<ContextType>({
    open: true,
    setOpen: () => { },
    selected: ""
});

export default {
    Menu,
    Content,
    Href,
    Root,
    Item,
    Hamburguer
}