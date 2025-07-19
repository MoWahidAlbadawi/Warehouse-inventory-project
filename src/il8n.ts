// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // seo
            warehouseMetaDescription: "A page to display available products in the warehouse with edit options.",
            warehouseMetaKeywords: "warehouse, goods, products, trade, inventory, items",
            warehouseCard: "Warehouse Card",
              addItem: "Add Item",
              addItemMetaDescription: "A page to add goods to the warehouse for later display.",
              addItemMetaKeywords: "warehouse, add, item, products, goods, trade",
          // content
          descriptionNoItems : "You do not have stock in the warehouse. Please purchase as soon as possible",
          add : "Add",
          itemName : "Item Name",
          enterItemName : "enter item name",
          companyName : "Company Name",
          enterCompanyName : "enter company name",
          quantity : "quantity",
          addItemSuccessful : "item added successfully",
          company : "Company",
          addItemButton : "add successfully",
          removeItemButton : "remove successfully",
          selectLanguage : "select language",
          mainTitle : 'Warehouse inventory',
        },
      },
      ar: {
        translation: {
          // seo
          warehouseMetaDescription: "صفحة لعرض المنتجات المتوفرة في المستودع مع خيارات التعديل.",
          warehouseMetaKeywords: "مستودع, بضائع, منتجات, تجارة, مخزون, warehouse, items",
          warehouseCard: "بطاقة المستودع",
           addItem : "إضافة بضاعة",
            addItemMetaDescription : "صفحة لإضافة البضائع إلى المستودع لعرضها لاحقًا.",
            addItemMetaKeywords : "مستودع, إضافة, بضاعة, منتجات, تجارة, warehouse, add item",
          // other content
          descriptionNoItems : "ليس لديك بضاعة مخزنة في المستودع نرجو الشراء في أسرع وقت ممكن",
          add : "إضافة",
          itemName : "اسم الصنف",
          enterItemName : "ادخل اسم الصنف",
          companyName : "اسم الشركة المصنعة",
          enterCompanyName : "ادخل اسم الشركة المصنعة",
          quantity : "الكمية",
          addItemSuccessful : "تمت اضافة العنصر بنجاح",
          company : "شركة",
          addItemButton : "تمت الإضافة بنجاح",
          removeItemButton : "تم السحب بنجاح",
          selectLanguage : "اختر اللغة",
          mainTitle : 'جرد المستودع'
        },
      },
    },
    lng: "ar", 
    fallbackLng: "ar", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
