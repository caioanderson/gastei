import { TypeDebits } from "../constants/mocks";
import { DebitValueType } from "../screens/NewDebit";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signIn: undefined;
      home: undefined;
      debitdetail: { 
        debit: TypeDebits;
      }
      newDebit: undefined;
      remember: {
        account: DebitValueType;
      };
    }
  }
}