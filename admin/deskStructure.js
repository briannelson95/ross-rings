import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineCog, HiOutlineDocumentAdd, HiOutlineHome, HiOutlineShoppingCart, HiMenuAlt2, HiViewGridAdd } from "react-icons/hi";

// Add schema types to hidden
const hiddenDocTypes = listItem =>
    ![
        "siteSettings", 
        "page", 
        "products",
        "home",
        "work",
        "socialGallery"
    ].includes(
        listItem.getId()
    );

// Render a custom UI to view siteSettings & pages
// and showing other items except mentioned in the hidden docTypes
export default () =>
    S.list()
        .title("Content Manager")
        .items([
            S.listItem()
                .title("Site Settings")
                .icon(HiOutlineCog)
                .child(
                    S.editor()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                ),
            S.listItem()
                .title("Homepage")
                .icon(HiOutlineHome)
                .child(
                    S.editor()
                        .schemaType("home")
                        .documentId("homepage")
                ),
            S.divider(),
            S.listItem()
                .title("My Work")
                .icon(HiMenuAlt2)
                .child(
                    S.editor()
                        .schemaType("work")
                        .documentId("work")
                ),
            S.divider(),
            // add visial divider (optional)
            S.documentTypeListItem("page").title("Pages").icon(HiOutlineDocumentAdd),
            S.documentTypeListItem("products").title("Products").icon(HiOutlineShoppingCart),
            S.divider(),
            
            ...S.documentTypeListItems().filter(hiddenDocTypes),
            S.divider(),
            S.listItem()
                .title("Social Image Gallery")
                .icon(HiViewGridAdd)
                .child(
                    S.editor()
                        .schemaType("socialGallery")
                        .documentId("socialGallery")
                ),
        ])