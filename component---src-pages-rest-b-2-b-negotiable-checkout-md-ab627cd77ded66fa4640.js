"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3121],{19203:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return u}});var t,o=a(87462),i=a(63366),s=(a(15007),a(64983)),r=a(91515),l=a(8673),d=["components"],p={},c=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:p},_=r.Z;function u(e){var n=e.components,a=(0,i.Z)(e,d);return(0,s.mdx)(_,(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"negotiable-quote-checkout"},"Negotiable quote checkout"),(0,s.mdx)("p",null,"When the seller and buyer user agree on the quoted products and their prices, the negotiated quote is ready to be converted to an order."),(0,s.mdx)("p",null,"During the standard checkout process, Adobe Commerce refreshes and recalculates all product and shipping prices as well as taxes. This process is different for the quote that has a negotiated price (discounted offer from the seller). The system keeps the quoted price, but checks the tax amounts. If the tax amounts are outdated, Commerce recalculates them and updates the quote totals. These tax adjustments can change the order grand total. The order and invoice are created with the recalculated taxes and new grand total. All other prices in the quote remain unchanged."),(0,s.mdx)("p",null,"The same rule is applied when the quote has the proposed shipping price and the shipping taxes change on the checkout. The buyer pays the updated price, but this does not affect the other quote amounts."),(0,s.mdx)("p",null,"The following diagram illustrates the workflow for ",(0,s.mdx)(l.sitedatavarb2b,null)," negotiable quote checkouts:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"919px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/cb523/quote-checkout-process.webp 320w","/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/797b9/quote-checkout-process.webp 640w","/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/eb45a/quote-checkout-process.webp 919w"],sizes:"(max-width: 919px) 100vw, 919px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/72799/quote-checkout-process.png 320w","/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/6af66/quote-checkout-process.png 640w","/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/6295b/quote-checkout-process.png 919w"],sizes:"(max-width: 919px) 100vw, 919px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/75e6d51302ca9326bd752051d8cf05ae/6295b/quote-checkout-process.png",alt:"Checkout process",title:"Checkout process",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"manage-shipping-addresses"},"Manage shipping addresses"),(0,s.mdx)("p",null,"A negotiated quote can be initiated without a shipping address. However, before the order can be placed, the shipping address must be provided."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"POST /V1/negotiable-carts/:cartId/estimate-shipping-methods\nPOST /V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id\nPOST /V1/negotiable-carts/:cartId/shipping-information\n")),(0,s.mdx)("h3",{id:"estimate-shipping-costs-specifying-an-address"},"Estimate shipping costs specifying an address"),(0,s.mdx)("p",null,"This call takes a full shipping address as input and estimates shipping fees. It returns a list of available shipping methods."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteShipmentEstimationV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/estimate-shipping-methods")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "address": {\n  "street": [\n      "100 Big Tree Avenue"\n    ],\n  "city": "San Francisco",\n  "country_id": "US",\n  "region": "California",\n  "region_id": "12",\n  "postcode": "99999",\n  "telephone": "4155551212",\n  "firstname": "John",\n  "lastname": "Doe"\n  }\n}\n')),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "carrier_code": "flatrate",\n    "method_code": "flatrate",\n    "carrier_title": "Flat Rate",\n    "method_title": "Fixed",\n    "amount": 5,\n    "base_amount": 5,\n    "available": true,\n    "error_message": "",\n    "price_excl_tax": 5,\n    "price_incl_tax": 5\n  }\n]\n')),(0,s.mdx)("h3",{id:"estimate-shipping-costs-specifying-an-address-id"},"Estimate shipping costs specifying an address ID"),(0,s.mdx)("p",null,"This call takes an address ID as input and estimates shipping fees. It returns a list of available shipping methods."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteShippingMethodManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/estimate-shipping-methods-by-address-id")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-1"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "addressId": 2\n}\n')),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "carrier_code": "flatrate",\n    "method_code": "flatrate",\n    "carrier_title": "Flat Rate",\n    "method_title": "Fixed",\n    "amount": 5,\n    "base_amount": 5,\n    "available": true,\n    "error_message": "",\n    "price_excl_tax": 5,\n    "price_incl_tax": 5\n  }\n]\n')),(0,s.mdx)("h3",{id:"set-the-shipping-and-billing-information"},"Set the shipping and billing information"),(0,s.mdx)("p",null,"In this call, you specify the shipping and billing addresses, as well as the selected ",(0,s.mdx)("inlineCode",{parentName:"p"},"shipping_carrier_code")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"shipping_method_code"),". Commerce returns a list of payment options and calculates the order totals."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteShippingMethodManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/shipping-information")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-2"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "addressInformation": {\n    "shipping_address": {\n      "region": "California",\n      "region_id": 12,\n      "country_id": "US",\n      "street": [\n        "100 Big Tree Avenue"\n      ],\n      "postcode": "99999",\n      "city": "San Francisco",\n      "telephone": "512-555-1111",\n      "firstname": "Jane",\n      "lastname": "Doe"\n    },\n    "billing_address": {\n      "region": "New York",\n      "region_id": 43,\n      "region_code": "NY",\n      "country_id": "US",\n      "street": [\n        "123 Oak Ave"\n      ],\n      "postcode": "10577",\n      "city": "Purchase",\n      "firstname": "Jane",\n      "lastname": "Doe",\n      "email": "jdoe@example.com",\n      "telephone": "512-555-1111"\n    },\n    "shipping_carrier_code": "flatrate",\n    "shipping_method_code": "flatrate"\n  }\n}\n')),(0,s.mdx)("h4",{id:"response-2"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "payment_methods": [\n    {\n      "code": "checkmo",\n      "title": "Check / Money order"\n    }\n  ],\n  "totals": {\n    "grand_total": 5.95,\n    "base_grand_total": 5.95,\n    "subtotal": 0.95,\n    "base_subtotal": 0.95,\n    "discount_amount": 0,\n    "base_discount_amount": 0,\n    "subtotal_with_discount": 0.95,\n    "base_subtotal_with_discount": 0.95,\n    "shipping_amount": 5,\n    "base_shipping_amount": 5,\n    "shipping_discount_amount": 0,\n    "base_shipping_discount_amount": 0,\n    "tax_amount": 0,\n    "base_tax_amount": 0,\n    "weee_tax_applied_amount": null,\n    "shipping_tax_amount": 0,\n    "base_shipping_tax_amount": 0,\n    "subtotal_incl_tax": 0.95,\n    "shipping_incl_tax": 5,\n    "base_shipping_incl_tax": 5,\n    "base_currency_code": "USD",\n    "quote_currency_code": "USD",\n    "items_qty": 1,\n    "items": [\n      {\n        "item_id": 13,\n        "price": 0.95,\n        "base_price": 0.95,\n        "qty": 1,\n        "row_total": 0.95,\n        "base_row_total": 0.95,\n        "row_total_with_discount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "tax_percent": 0,\n        "discount_amount": 0,\n        "base_discount_amount": 0,\n        "discount_percent": 0,\n        "price_incl_tax": 0.95,\n        "base_price_incl_tax": 0.95,\n        "row_total_incl_tax": 0.95,\n        "base_row_total_incl_tax": 0.95,\n        "options": "[]",\n        "weee_tax_applied_amount": null,\n        "weee_tax_applied": null,\n        "extension_attributes": {\n          "negotiable_quote_item_totals": {\n            "cost": 0,\n            "catalog_price": 0.95,\n            "base_catalog_price": 0.95,\n            "catalog_price_incl_tax": 0.95,\n            "base_catalog_price_incl_tax": 0.95,\n            "cart_price": 0.95,\n            "base_cart_price": 0.95,\n            "cart_tax": 0,\n            "base_cart_tax": 0,\n            "cart_price_incl_tax": 0.95,\n            "base_cart_price_incl_tax": 0.95\n          }\n        },\n        "name": "Simple Product 2"\n      }\n    ],\n    "total_segments": [\n      {\n        "code": "subtotal",\n        "title": "Subtotal",\n        "value": 0.95\n      },\n      {\n        "code": "giftwrapping",\n        "title": "Gift Wrapping",\n        "value": null,\n        "extension_attributes": {\n          "gw_item_ids": [],\n          "gw_price": "0.00",\n          "gw_base_price": "0.00",\n          "gw_items_price": "0.00",\n          "gw_items_base_price": "0.00",\n          "gw_card_price": "0.00",\n          "gw_card_base_price": "0.00",\n          "gw_base_tax_amount": "0.00",\n          "gw_tax_amount": "0.00",\n          "gw_items_base_tax_amount": "0.00",\n          "gw_items_tax_amount": "0.00",\n          "gw_card_base_tax_amount": "0.00",\n          "gw_card_tax_amount": "0.00",\n          "gw_price_incl_tax": "0.00",\n          "gw_base_price_incl_tax": "0.00",\n          "gw_card_price_incl_tax": "0.00",\n          "gw_card_base_price_incl_tax": "0.00",\n          "gw_items_price_incl_tax": "0.00",\n          "gw_items_base_price_incl_tax": "0.00"\n        }\n      },\n      {\n        "code": "shipping",\n        "title": "Shipping & Handling (Flat Rate - Fixed)",\n        "value": 5\n      },\n      {\n        "code": "tax",\n        "title": "Tax",\n        "value": 0,\n        "extension_attributes": {\n          "tax_grandtotal_details": []\n        }\n      },\n      {\n        "code": "grand_total",\n        "title": "Grand Total",\n        "value": 5.95,\n        "area": "footer"\n      },\n      {\n        "code": "customerbalance",\n        "title": "Store Credit",\n        "value": 0\n      },\n      {\n        "code": "reward",\n        "title": "0 Reward points",\n        "value": 0\n      }\n    ],\n    "extension_attributes": {\n      "negotiable_quote_totals": {\n        "items_count": 1,\n        "quote_status": "submitted_by_admin",\n        "created_at": "2017-05-30 20:41:00",\n        "updated_at": "2017-05-30 20:41:00",\n        "customer_group": 10,\n        "base_to_quote_rate": 1,\n        "cost_total": 0,\n        "base_cost_total": 0,\n        "original_total": 0.95,\n        "base_original_total": 0.95,\n        "original_tax": 0,\n        "base_original_tax": 0,\n        "original_price_incl_tax": 0.95,\n        "base_original_price_incl_tax": 0.95,\n        "negotiated_price_type": null,\n        "negotiated_price_value": null\n      },\n      "reward_points_balance": 0,\n      "reward_currency_amount": 0,\n      "base_reward_currency_amount": 0\n    }\n  }\n}\n')),(0,s.mdx)("h2",{id:"manage-billing-addresses"},"Manage billing addresses"),(0,s.mdx)("p",null,"If the billing address isn't provided through another call, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST /V1/negotiable-carts/:cartId/billing-address")," to specify it."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteBillingAddressManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"POST /V1/negotiable-carts/:cartId/billing-address\nGET /V1/negotiable-carts/:cartId/billing-address\n")),(0,s.mdx)("h3",{id:"set-the-billing-address"},"Set the billing address"),(0,s.mdx)("p",null,"This call assigns a billing address to the specified negotiable quote."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/billing-address")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-3"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{  "address": {\n      "region": "New York",\n      "region_id": 43,\n      "region_code": "NY",\n      "country_id": "US",\n      "street": [\n        "123 Oak Ave"\n        ],\n      "postcode": "10577",\n      "city": "Purchase",\n      "firstname": "Jane",\n      "lastname": "Doe",\n      "customer_id": 4,\n      "email": "jdoe@example.com",\n      "telephone": "(512) 555-1111",\n      "same_as_billing": 1\n  }\n}\n')),(0,s.mdx)("h4",{id:"response-3"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// An empty array\n")),(0,s.mdx)("h3",{id:"return-the-billing-address"},"Return the billing address"),(0,s.mdx)("p",null,"This call returns the billing address for the specified negotiable quote."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/negotiable-carts/86/billing-address")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-4"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,s.mdx)("h4",{id:"response-4"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 192,\n  "region": "New York",\n  "region_id": 43,\n  "region_code": "NY",\n  "country_id": "US",\n  "street": [\n    "123 Oak Ave"\n  ],\n  "telephone": "(512) 555-1111",\n  "postcode": "10577",\n  "city": "Purchase",\n  "firstname": "Jane",\n  "lastname": "Doe",\n  "customer_id": 1,\n  "email": "jdoe@example.com",\n  "same_as_billing": 0,\n  "save_in_address_book": 0\n}\n')),(0,s.mdx)("h2",{id:"manage-cart-coupons"},"Manage cart coupons"),(0,s.mdx)("p",null,"B2B allows coupons to be used toward payment."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteCouponManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"PUT /V1/negotiable-carts/:cartId/coupons/:couponCode\nDELETE /V1/negotiable-carts/:cartId/coupons\n")),(0,s.mdx)("h3",{id:"apply-a-coupon-to-a-negotiable-quote"},"Apply a coupon to a negotiable quote"),(0,s.mdx)("p",null,"If the initial quote applies a coupon to the totals, Commerce ignores the coupon when it converts the quote to a negotiable quote. However, you can apply a coupon at checkout."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"PUT <host>/rest/<store_code>/V1/negotiable-carts/6/coupons/SAVE5")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-5"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,s.mdx)("h4",{id:"response-5"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,s.mdx)("h2",{id:"manage-gift-cards"},"Manage gift cards"),(0,s.mdx)("p",null,"B2B allows gift cards to be used as payment."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteGiftCardAccountManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"POST /V1/negotiable-carts/:cartId/giftCards\nDELETE /V1/negotiable-carts/:cartId/giftCards/:giftCardCode\n")),(0,s.mdx)("h3",{id:"apply-a-gift-card-to-a-negotiable-quote"},"Apply a gift card to a negotiable quote"),(0,s.mdx)("p",null,"If the initial quote applies a gift card to the totals, Commerce ignores the gift card when it converts the quote to a negotiable quote. However, you can apply a gift card at checkout."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/6/giftCards")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-6"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "giftCardAccountData": {\n    "gift_cards": [\n      "00HELHQED6RV"\n    ]\n  }\n}\n')),(0,s.mdx)("h4",{id:"response-6"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`\n")),(0,s.mdx)("h3",{id:"delete-a-gift-card-from-at-checkout"},"Delete a gift card from at checkout"),(0,s.mdx)("p",null,"This call removes a gift card that has been applied to a negotiable quote."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"DELETE <host>/rest/<store_code>/V1/negotiable-carts/6/giftCards/00HELHQED6RV")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-7"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,s.mdx)("h4",{id:"response-7"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the request was successful\n")),(0,s.mdx)("h2",{id:"manage-payment-information"},"Manage payment information"),(0,s.mdx)("p",null,"When you submit payment information, Commerce creates an order and sends an order confirmation to the buyer."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuotePaymentInformationManagementV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"POST /V1/negotiable-carts/:cartId/payment-information\nGET /V1/negotiable-carts/:cartId/payment-information\nPOST /V1/negotiable-carts/:cartId/set-payment-information\n")),(0,s.mdx)("h3",{id:"set-payment-information-without-placing-the-order"},"Set payment information without placing the order"),(0,s.mdx)("p",null,"This call sets payment information and the billing address for the negotiable quote. However, Commerce does not create an order afterward."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/set-payment-information")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-8"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{  "paymentMethod": {\n   "po_number": "A123456",\n   "method": "checkmo"\n  },\n  "billing_address": {\n   "region": "New York",\n    "region_id": 43,\n    "region_code": "NY",\n    "country_id": "US",\n    "street": [\n      "123 Oak Ave"\n    ],\n    "postcode": "10577",\n    "city": "Purchase",\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "email": "jdoe@example.com",\n    "telephone": "512-555-1111"\n  }\n}\n')),(0,s.mdx)("h4",{id:"response-8"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the payment information was set\n")),(0,s.mdx)("h3",{id:"set-payment-information-and-place-the-order"},"Set payment information and place the order"),(0,s.mdx)("p",null,"This call sets payment information and the billing address for the negotiable quote, then creates an order."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/negotiable-carts/86/payment-information")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-9"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{  "paymentMethod": {\n    "po_number": "A123456",\n    "method": "checkmo"\n  },\n  "billing_address": {\n   "region": "New York",\n    "region_id": 43,\n    "region_code": "NY",\n    "country_id": "US",\n    "street": [\n      "123 Oak Ave"\n    ],\n    "postcode": "10577",\n    "city": "Purchase",\n    "firstname": "Jane",\n    "lastname": "Doe",\n    "email": "jdoe@example.com",\n    "telephone": "512-555-1111"\n  }\n}\n')),(0,s.mdx)("h4",{id:"response-9"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// An order ID, such as `83`\n")),(0,s.mdx)("h3",{id:"return-payment-information"},"Return payment information"),(0,s.mdx)("p",null,"This call payment information and all information from the ",(0,s.mdx)("inlineCode",{parentName:"p"},"totals")," object."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/negotiable-carts/86/payment-information")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-10"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,s.mdx)("h4",{id:"response-10"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "payment_methods": [\n    {\n      "code": "checkmo",\n      "title": "Check / Money order"\n    }\n  ],\n  "totals": {\n    "grand_total": 5.95,\n    "base_grand_total": 5.95,\n    "subtotal": 0.95,\n    "base_subtotal": 0.95,\n    "discount_amount": 0,\n    "base_discount_amount": 0,\n    "subtotal_with_discount": 0.95,\n    "base_subtotal_with_discount": 0.95,\n    "shipping_amount": 5,\n    "base_shipping_amount": 5,\n    "shipping_discount_amount": 0,\n    "base_shipping_discount_amount": 0,\n    "tax_amount": 0,\n    "base_tax_amount": 0,\n    "weee_tax_applied_amount": null,\n    "shipping_tax_amount": 0,\n    "base_shipping_tax_amount": 0,\n    "subtotal_incl_tax": 0.95,\n    "shipping_incl_tax": 5,\n    "base_shipping_incl_tax": 5,\n    "base_currency_code": "USD",\n    "quote_currency_code": "USD",\n    "items_qty": 1,\n    "items": [\n      {\n        "item_id": 13,\n        "price": 0.95,\n        "base_price": 0.95,\n        "qty": 1,\n        "row_total": 0.95,\n        "base_row_total": 0.95,\n        "row_total_with_discount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "tax_percent": 0,\n        "discount_amount": 0,\n        "base_discount_amount": 0,\n        "discount_percent": 0,\n        "price_incl_tax": 0.95,\n        "base_price_incl_tax": 0.95,\n        "row_total_incl_tax": 0.95,\n        "base_row_total_incl_tax": 0.95,\n        "options": "[]",\n        "weee_tax_applied_amount": null,\n        "weee_tax_applied": null,\n        "extension_attributes": {\n          "negotiable_quote_item_totals": {\n            "cost": 0,\n            "catalog_price": 0.95,\n            "base_catalog_price": 0.95,\n            "catalog_price_incl_tax": 0.95,\n            "base_catalog_price_incl_tax": 0.95,\n            "cart_price": 0.95,\n            "base_cart_price": 0.95,\n            "cart_tax": 0,\n            "base_cart_tax": 0,\n            "cart_price_incl_tax": 0.95,\n            "base_cart_price_incl_tax": 0.95\n          }\n        },\n        "name": "Simple Product 2"\n      }\n    ],\n    "total_segments": [\n      {\n        "code": "subtotal",\n        "title": "Subtotal",\n        "value": 0.95\n      },\n      {\n        "code": "giftwrapping",\n        "title": "Gift Wrapping",\n        "value": null,\n        "extension_attributes": {\n          "gw_item_ids": [],\n          "gw_price": "0.00",\n          "gw_base_price": "0.00",\n          "gw_items_price": "0.00",\n          "gw_items_base_price": "0.00",\n          "gw_card_price": "0.00",\n          "gw_card_base_price": "0.00",\n          "gw_base_tax_amount": "0.00",\n          "gw_tax_amount": "0.00",\n          "gw_items_base_tax_amount": "0.00",\n          "gw_items_tax_amount": "0.00",\n          "gw_card_base_tax_amount": "0.00",\n          "gw_card_tax_amount": "0.00",\n          "gw_price_incl_tax": "0.00",\n          "gw_base_price_incl_tax": "0.00",\n          "gw_card_price_incl_tax": "0.00",\n          "gw_card_base_price_incl_tax": "0.00",\n          "gw_items_price_incl_tax": "0.00",\n          "gw_items_base_price_incl_tax": "0.00"\n        }\n      },\n      {\n        "code": "shipping",\n        "title": "Shipping & Handling (Flat Rate - Fixed)",\n        "value": 5\n      },\n      {\n        "code": "tax",\n        "title": "Tax",\n        "value": 0,\n        "extension_attributes": {\n          "tax_grandtotal_details": []\n        }\n      },\n      {\n        "code": "grand_total",\n        "title": "Grand Total",\n        "value": 5.95,\n        "area": "footer"\n      },\n      {\n        "code": "customerbalance",\n        "title": "Store Credit",\n        "value": 0\n      },\n      {\n        "code": "reward",\n        "title": "0 Reward points",\n        "value": 0\n      }\n    ],\n    "extension_attributes": {\n      "negotiable_quote_totals": {\n        "items_count": 1,\n        "quote_status": "submitted_by_admin",\n        "created_at": "2017-05-30 20:41:00",\n        "updated_at": "2017-06-09 20:26:49",\n        "customer_group": 10,\n        "base_to_quote_rate": 1,\n        "cost_total": 0,\n        "base_cost_total": 0,\n        "original_total": 0.95,\n        "base_original_total": 0.95,\n        "original_tax": 0,\n        "base_original_tax": 0,\n        "original_price_incl_tax": 0.95,\n        "base_original_price_incl_tax": 0.95,\n        "negotiated_price_type": null,\n        "negotiated_price_value": null\n      },\n      "reward_points_balance": 0,\n      "reward_currency_amount": 0,\n      "base_reward_currency_amount": 0\n    }\n  }\n}\n')),(0,s.mdx)("h2",{id:"review-cart-totals"},"Review cart totals"),(0,s.mdx)("p",null,"This call is similar to ",(0,s.mdx)("inlineCode",{parentName:"p"},"GET /V1/negotiable-carts/:cartId/payment-information"),", except it does not return payment information."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service Name:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"negotiableQuoteCartTotalRepositoryV1")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"GET /V1/negotiable-carts/:cartId/totals\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/negotiable-carts/86/totals")),(0,s.mdx)(c,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-11"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,s.mdx)("h4",{id:"response-11"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "totals": {\n    "grand_total": 5.95,\n    "base_grand_total": 5.95,\n    "subtotal": 0.95,\n    "base_subtotal": 0.95,\n    "discount_amount": 0,\n    "base_discount_amount": 0,\n    "subtotal_with_discount": 0.95,\n    "base_subtotal_with_discount": 0.95,\n    "shipping_amount": 5,\n    "base_shipping_amount": 5,\n    "shipping_discount_amount": 0,\n    "base_shipping_discount_amount": 0,\n    "tax_amount": 0,\n    "base_tax_amount": 0,\n    "weee_tax_applied_amount": null,\n    "shipping_tax_amount": 0,\n    "base_shipping_tax_amount": 0,\n    "subtotal_incl_tax": 0.95,\n    "shipping_incl_tax": 5,\n    "base_shipping_incl_tax": 5,\n    "base_currency_code": "USD",\n    "quote_currency_code": "USD",\n    "items_qty": 1,\n    "items": [\n      {\n        "item_id": 13,\n        "price": 0.95,\n        "base_price": 0.95,\n        "qty": 1,\n        "row_total": 0.95,\n        "base_row_total": 0.95,\n        "row_total_with_discount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "tax_percent": 0,\n        "discount_amount": 0,\n        "base_discount_amount": 0,\n        "discount_percent": 0,\n        "price_incl_tax": 0.95,\n        "base_price_incl_tax": 0.95,\n        "row_total_incl_tax": 0.95,\n        "base_row_total_incl_tax": 0.95,\n        "options": "[]",\n        "weee_tax_applied_amount": null,\n        "weee_tax_applied": null,\n        "extension_attributes": {\n          "negotiable_quote_item_totals": {\n            "cost": 0,\n            "catalog_price": 0.95,\n            "base_catalog_price": 0.95,\n            "catalog_price_incl_tax": 0.95,\n            "base_catalog_price_incl_tax": 0.95,\n            "cart_price": 0.95,\n            "base_cart_price": 0.95,\n            "cart_tax": 0,\n            "base_cart_tax": 0,\n            "cart_price_incl_tax": 0.95,\n            "base_cart_price_incl_tax": 0.95\n          }\n        },\n        "name": "Simple Product 2"\n      }\n    ],\n    "total_segments": [\n      {\n        "code": "subtotal",\n        "title": "Subtotal",\n        "value": 0.95\n      },\n      {\n        "code": "giftwrapping",\n        "title": "Gift Wrapping",\n        "value": null,\n        "extension_attributes": {\n          "gw_item_ids": [],\n          "gw_price": "0.00",\n          "gw_base_price": "0.00",\n          "gw_items_price": "0.00",\n          "gw_items_base_price": "0.00",\n          "gw_card_price": "0.00",\n          "gw_card_base_price": "0.00",\n          "gw_base_tax_amount": "0.00",\n          "gw_tax_amount": "0.00",\n          "gw_items_base_tax_amount": "0.00",\n          "gw_items_tax_amount": "0.00",\n          "gw_card_base_tax_amount": "0.00",\n          "gw_card_tax_amount": "0.00",\n          "gw_price_incl_tax": "0.00",\n          "gw_base_price_incl_tax": "0.00",\n          "gw_card_price_incl_tax": "0.00",\n          "gw_card_base_price_incl_tax": "0.00",\n          "gw_items_price_incl_tax": "0.00",\n          "gw_items_base_price_incl_tax": "0.00"\n        }\n      },\n      {\n        "code": "shipping",\n        "title": "Shipping & Handling (Flat Rate - Fixed)",\n        "value": 5\n      },\n      {\n        "code": "tax",\n        "title": "Tax",\n        "value": 0,\n        "extension_attributes": {\n          "tax_grandtotal_details": []\n        }\n      },\n      {\n        "code": "grand_total",\n        "title": "Grand Total",\n        "value": 5.95,\n        "area": "footer"\n      },\n      {\n        "code": "customerbalance",\n        "title": "Store Credit",\n        "value": 0\n      },\n      {\n        "code": "reward",\n        "title": "0 Reward points",\n        "value": 0\n      }\n    ],\n    "extension_attributes": {\n      "negotiable_quote_totals": {\n        "items_count": 1,\n        "quote_status": "submitted_by_admin",\n        "created_at": "2017-05-30 20:41:00",\n        "updated_at": "2017-06-09 20:26:49",\n        "customer_group": 10,\n        "base_to_quote_rate": 1,\n        "cost_total": 0,\n        "base_cost_total": 0,\n        "original_total": 0.95,\n        "base_original_total": 0.95,\n        "original_tax": 0,\n        "base_original_tax": 0,\n        "original_price_incl_tax": 0.95,\n        "base_original_price_incl_tax": 0.95,\n        "negotiated_price_type": null,\n        "negotiated_price_value": null\n      },\n      "reward_points_balance": 0,\n      "reward_currency_amount": 0,\n      "base_reward_currency_amount": 0\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-b-2-b-negotiable-checkout-md-ab627cd77ded66fa4640.js.map