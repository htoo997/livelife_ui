import Users from './../../services/users.service.js';
const state = {
  all: [],
  roles: [],
  visaTransactions: [],
  walletTransactions: [],
};
const getters = {};
const actions = {
  async getUsers({state, commit}) {
    if (state.all.length) {
      return state.all
    }  

    if (state.fetchPromise) {
      return state.fetchPromise
    }
  
   await Users.getUsersAll().then((res) => {
      commit('setUsers', res.data.alluserinfo)
    }).catch((error) => {
      console.log(error);
    })

  },
  async getRoles({commit}) {
    await commit('setRoles', [{id : 1, name : 'superadmin', serviceName : 'Do nothing', serviceCode : 'DNT'}]);
   
     
   },
   async getVisaTransactions({commit}) {
    await commit('setVisaTransactions',  [
      {
        "barcodeRef": "900000285429",
        "cardNumber": "111111XXXXXX1111",
        "cardRef": "202111111411448267",
        "cashbackAmount": "0",
        "cashbackStatus": "",
        "categoryCode": "5331",
        "categoryName": "DISCOUNT STORES",
        "country": "",
        "deductCardAmount": 105,
        "deductCardCurrency": "THB",
        "merchantID": "401007900015001",
        "merchantName": "AirPay (Thailand)      021189170     THA",
        "originAmount": 105,
        "originCurrency": "THB",
        "paymentStatus": "Success",
        "reversalDate": null,
        "reverseAmount": null,
        "transactionDate": "2022-03-25 14:04:02",
        "transactionID": "400503",
        "transactionType": ""
      }
    ]); 
   }, async getWalletTransactions({commit}) {
    await commit('setWalletTransactions',  [
      {
        "amount": 1,
        "appType": "DPV",
        "channelType": "DeepPocketTransfer",
        "channelTypeName": "DeepPocket Transfer",
        "description": "ทำการโอนเงินให้ 9000xxx53553",
        "referenceCode": "10306",
        "referenceType": "DeepPocketTransfer",
        "timeStamp": "2021-10-20 12:56:28",
        "transactionHistoryType": "transfer",
        "transactionID": "102159601",
        "transactionStatus": "Success",
        "transactionType": "WITHDRAWAL"
      },
      {
        "amount": 1,
        "appType": "DPV",
        "channelType": "Transfer",
        "channelTypeName": "VISA Wallet Transfer",
        "description": "ทำการโอนเงินให้ 9000xxx53553",
        "referenceCode": "10299",
        "referenceType": "Transfer",
        "timeStamp": "2021-10-20 12:48:44",
        "transactionHistoryType": "payment",
        "transactionID": "102159591",
        "transactionStatus": "Success",
        "transactionType": "WITHDRAWAL"
      },
      {
        "amount": 1000,
        "appType": "DPV",
        "channelType": "Transfer",
        "channelTypeName": "VISA Wallet Transfer",
        "description": "Cancel Payment:102159583",
        "referenceCode": "10297",
        "referenceType": "Transfer",
        "timeStamp": "2021-10-20 12:37:54",
        "transactionHistoryType": "refund",
        "transactionID": "102159589",
        "transactionStatus": "Success",
        "transactionType": "DEPOSIT"
      },
      {
        "amount": 1,
        "appType": "DPV",
        "channelType": "Transfer",
        "channelTypeName": "VISA Wallet Transfer",
        "description": "ทำการโอนเงินให้ 9000xxx53553",
        "referenceCode": "10297",
        "referenceType": "Transfer",
        "timeStamp": "2021-10-20 12:25:18",
        "transactionHistoryType": "payment",
        "transactionID": "102159583",
        "transactionStatus": "Success",
        "transactionType": "WITHDRAWAL"
      },
      {
        "amount": 1,
        "appType": "DPV",
        "channelType": "Transfer",
        "channelTypeName": "VISA Wallet Transfer",
        "description": "ทำการโอนเงินให้ 9000xxx53553",
        "referenceCode": "10296",
        "referenceType": "Transfer",
        "timeStamp": "2021-10-20 10:46:43",
        "transactionHistoryType": "payment",
        "transactionID": "102159575",
        "transactionStatus": "Success",
        "transactionType": "WITHDRAWAL"
      }
    ]); 
   }
};
const mutations = {
    setUsers (state, users) {
      state.all = users;
    },
    setRoles (state, roles) {
      state.roles = roles;
    },
    setVisaTransactions (state, visaTransactions) {
      state.visaTransactions = visaTransactions;
    },
    setWalletTransactions (state, walletTransactions) {
      state.walletTransactions = walletTransactions;
    }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}