// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          addItem : "Add Item",
          warehouseCard : "Warehouse Card",
          descriptionNoItems : "You do not have stock in the warehouse. Please purchase as soon as possible",
          add : "Add",
          itemName : "Item Name",
          enterItemName : "enter item name",
          companyName : "Company Name",
          enterCompanyName : "enter company name",
          quantity : "quantity",
          addItemSuccessful : "item added successfully",
          company : "Company",
          addOneItem : "add one item successfully",
          removeOneItem : "remove one item successfully",
          selectLanguage : "select language"
          // أضف المزيد من النصوص هنا
        },
      },
      ar: {
        translation: {
          welcome: "أهلا وسهلا",
          addItem : "إضافة بضاعة",
          warehouseCard : "بطاقة مستودع",
          descriptionNoItems : "ليس لديك بضاعة مخزنة في المستودع نرجو الشراء في أسرع وقت ممكن",
          add : "إضافة",
          itemName : "اسم الصنف",
          enterItemName : "ادخل اسم الصنف",
          companyName : "اسم الشركة المصنعة",
          enterCompanyName : "ادخل اسم الشركة المصنعة",
          quantity : "الكمية",
          addItemSuccessful : "تمت اضافة العنصر بنجاح",
          company : "شركة",
          addOneItem : "تم زيادة عنصر واحد",
          removeOneItem : "تم سحب عنصر واحد",
          selectLanguage : "اختر اللغة"
          // أضف المزيد من النصوص هنا
        },
      },
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar", // اللغة الاحتياطية في حالة عدم توفر النصوص
    interpolation: {
      escapeValue: false, // لا حاجة للهروب من القيم في React
    },
  });

export default i18n;
