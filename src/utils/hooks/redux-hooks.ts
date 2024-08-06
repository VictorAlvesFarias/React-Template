import { useDispatch, useSelector, useStore } from "react-redux"
import { AppDispatch, AppStore, RootState } from "../../store"

const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>()
const useAppStore = useStore.withTypes<AppStore>()

export {
    useAppDispatch,
    useAppSelector,
    useAppStore
}