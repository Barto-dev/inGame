import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import * as userActionCreators from '../redux/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(userActionCreators, dispatch);
  }, [dispatch])
}
