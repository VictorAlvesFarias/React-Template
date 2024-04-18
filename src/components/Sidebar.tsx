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

interface ContentContainer {
    className: string,
    children?: React.ReactNode
}

interface ContentVariation extends Omit<ContentContainer, "className"> {

}

interface ContentComponent extends ContentVariation {
    variation?: keyof typeof rootVariations
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

interface HrefContainer {
    className: string,
    children: React.ReactNode
}

interface HrefVariation extends Omit<HrefContainer, "className"> {

}

interface HrefComponent extends HrefVariation {
    variation?: keyof typeof rootVariations
}

interface ItemContainer {
    className: string
    children: React.ReactNode
    href: string
    selected: string
}

interface ItemVariation extends Omit<ItemContainer, "className" | "selected"> {

}

interface ItemComponent extends ItemVariation {
    variation?: keyof typeof itemVariations
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

const rootVariations = {
    default: (props: RootVariation) =>
        <RootContainer {...props} className="flex flex-col md:flex-row w-screen h-screen" />
}

const menuVariations = {
    default: (props: MenuVariation) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-gradient-to-b from-black to-zinc-900 gap-1"
        />
}

const hrefVariations = {
    default: (props: HrefVariation) =>
        <HrefContainer {...props} className="" />
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

const contentVariations = {
    default: (props: ContentVariation) =>
        <ContentContainer {...props} className=" h-full flex flex-1 center" />
}

const hamburguerVariations = {
    default: (props: HamburguerVariation) =>
        <HamburguerContainer {...props} className=" h-full flex flex-1 center fixed top-0 left-0 md:hidden " />
}

function RootContainer(props: RootContainer) {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
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
            <div className={'flex-1 pr-12  fixed top-0 h-full w-full transition-all ' + (open ? "right-0 delay-0" : "right-full delay-500 ")}>
                <div className={'flex-1 pr-12  fixed  h-full w-full bg-black transition-all duration-500 ' + (open ? "opacity-30" : "opacity-0")}>
                </div>
            </div>
        </>
    )
}

function HrefContainer(props: HrefContainer) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

function ItemContainer(props: ItemContainer) {
    const { selected } = useContext(SidebarContext)

    return (
        <Link to={props.href} className={selected.split("/")[1] == props.href.split("/")[1] ? props.selected : props.className}>
            {props.children}
        </Link>
    )
}

function ContentContainer(props: ContentContainer) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

function HamburguerContainer(props: HamburguerContainer) {
    const { setOpen, open } = useContext(SidebarContext)
    return (
        <div onClick={() => setOpen(!open)} className={props.className}>
            {props.children}
        </div>
    )
}

function Root(props: RootComponent) {
    const Component = rootVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Href(props: HrefComponent) {
    const Component = hrefVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Content(props: ContentComponent) {
    const Component = contentVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Menu(props: MenuComponent) {
    const Component = menuVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Item(props: ItemComponent) {
    const Component = itemVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Hamburguer(props: HamburguerComponent) {
    const Component = hamburguerVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

interface ContextType {
    open: boolean
    setOpen: (e: boolean) => any
    selected: string
}

const SidebarContext = createContext<ContextType>({
    open: true,
    setOpen: () => { },
    selected: ""
});

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

export default {
    Menu,
    Content,
    Href,
    Root,
    Item,
    Hamburguer,
    Context
}