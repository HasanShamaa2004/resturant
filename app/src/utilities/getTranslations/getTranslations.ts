import i18n from "i18next";

export const getTranslations = async (locale: string) => {
  // التبديل إلى اللغة المطلوبة
  i18n.changeLanguage(locale);

  // التأكد من أن اللغة تم تحميلها بنجاح
  if (i18n.isInitialized) {
    // إرجاع الترجمات المتعلقة بالـ metadata
    return {
      thankYouTitle: i18n.t('thankYouTitle'),
      thankYouDescription: i18n.t('thankYouDescription'),
      thankYouOgTitle: i18n.t('thankYouOgTitle'),
      thankYouOgDescription: i18n.t('thankYouOgDescription'),
      takeawayTitle: i18n.t('takeawayTitle'),
      takeawayDescription: i18n.t('takeawayDescription'),
      reviewsTitle: i18n.t('reviewsTitle'),
      reviewsDescription: i18n.t('reviewsDescription'),
      menuTitle: i18n.t('menuTitle'),
      menuDescription: i18n.t('menuDescription'),
      inPersonPaymentTitle: i18n.t('inPersonPaymentTitle'),
      inPersonPaymentDescription: i18n.t('inPersonPaymentDescription'),
      deliveryPaymentTitle: i18n.t('deliveryPaymentTitle'),
      deliveryPaymentDescription: i18n.t('deliveryPaymentDescription'),
      cartTitle: i18n.t('cartTitle'),
      cartDescription: i18n.t('cartDescription'),
    };
  }

  // في حال فشل تحميل اللغة
  throw new Error("Language not loaded successfully");
};
