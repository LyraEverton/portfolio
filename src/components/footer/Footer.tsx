import "./Footer.scss";
import Icon from "@mdi/react";
import {mdiContentCopy, mdiEmailOutline, mdiEmoticonHappyOutline, mdiPhone} from "@mdi/js";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import i18next from "i18next";

export const Footer = () => {
    const showToastMessage = () => {
        toast.info(i18next.t('ns1:generic.copiedSuccessfully'), {
            position: toast.POSITION.BOTTOM_CENTER,
            bodyClassName: "toast-message",
        });
    };
    return (
        <div className={"footer py-4 px-3"}>
            <span className={"footer__getInTouch text-center d-block"}>{i18next.t('ns1:generic.getInTouch')}</span>
            <span className={"footer__whatsNext mt-1 text-center d-block d-md-none"}>
                <p>{i18next.t('ns1:footer.whatsNext1')}</p>
                <p>{i18next.t('ns1:footer.whatsNext2')}</p>
                <p>{i18next.t('ns1:footer.whatsNext3')}</p>
                <p>{i18next.t('ns1:footer.whatsNext4')}</p>
            </span>
            <span className={"footer__whatsNext mt-1 text-center d-none d-md-block"}>
                <p>{i18next.t('ns1:footer.whatsNext1')} {i18next.t('ns1:footer.whatsNext2')}</p>
                <p>{i18next.t('ns1:footer.whatsNext3')} {i18next.t('ns1:footer.whatsNext4')}</p>
            </span>
            <div className={"footer__contacts mt-2"}>
                <div className={"footer__contacts__email d-flex items-center justify-center"}>
                    <Icon path={mdiEmailOutline} size={1}/>
                    <span id={"email"}>{i18next.t('ns1:generic.email')}</span>
                    <span className={"footer__contacts__email__copy d-flex items-center justify-center"}
                          onClick={() => {
                              navigator.clipboard.writeText(document.getElementById("email")!?.innerHTML).then(
                                  () => {
                                      showToastMessage();
                                  }
                              );
                          }}>
                        <Icon path={mdiContentCopy} size={1}/>
                    </span>
                </div>
                <div className={"footer__contacts__phone mt-1 d-flex items-center justify-center"}>
                    <Icon path={mdiPhone} size={1}/>
                    <span id={"phone"}>{i18next.t('ns1:generic.phone')}</span>
                    <span className={"footer__contacts__phone__copy d-flex items-center justify-center"}
                          onClick={() => {
                              navigator.clipboard.writeText(document.getElementById("phone")!?.innerHTML).then(
                                  () => {
                                      showToastMessage();
                                  }
                              );
                          }}>
                        <Icon path={mdiContentCopy} size={1}/>
                    </span>

                </div>
            </div>
            <span className={"footer__thankYou mt-2 text-center d-block"}>{i18next.t('ns1:generic.thankYou')}</span>
            <span className={"footer__emoji mt-1 text-center d-block"}>
                <Icon path={mdiEmoticonHappyOutline} size={1}/>
            </span>
            <ToastContainer/>
        </div>
    );
}