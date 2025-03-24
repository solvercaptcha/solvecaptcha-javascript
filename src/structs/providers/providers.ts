import { supportedProviders } from "../constants/constants";

const defautlProvider = supportedProviders.solveCaptcha.name

export default function getProviderData( provider = defautlProvider ) {
  
  const currentProvider = provider
  let currentProviderData

  switch(currentProvider){
    case 'solvecaptcha':
      currentProviderData = supportedProviders.solveCaptcha
      break;
    // case 'opencaptcha':
    //   currentProviderData = supportedProviders.opencaptcha
    //   break;
    default:
      currentProviderData = supportedProviders.solveCaptcha
  }

  return currentProviderData
}