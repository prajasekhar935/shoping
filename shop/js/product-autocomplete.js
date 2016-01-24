$(function(){
    $(function () {
        var data = [
            {
                value: 'Moto X Play (Black, 32GB)',
                amount: 'Rs. 5999',
                url: 'images/motorola-moto-x-play-32gb-mobile.jpg',
                id: 269289
            },
            {
                value: 'Apple iPhone 6',
                amount: 'Rs. 38,975.00',
                url: 'images/apple-iphone-6s-na-400x400-imaeby6rmzxdpvbj.jpeg',
                id: 756
            },
            {
                value: 'Samsung Galaxy Note 4',
                amount: 'Rs. 33,999.00',
                url: 'images/samsung-note-4-sm-n910gzkeins-400x400-imaeyg7pqtxree4m.jpeg',
                 id: 81332
            },
            {
                value: 'Samsung Galaxy E7 (E700H) Black',
                amount: 'Rs. 17,400.00',
                url: 'images/samsung-galaxy-e5-e5-400x400-imae3urhdfntbvzs.jpeg',
                 id: 125805
            },
             {
                  value: 'Gionee Elife E7 (Black, 16 GB)',
                  amount: 'Rs. 13,975.00',
                  url: 'images/gionee-elife-e7-mini-e7-mini-400x400-imae5tkpw7x6xyjz.jpeg',
                  id: 81149
             },
             {
                 value: 'Dell Vostro 1450',
                 amount: 'Rs. 29,950.00',
                 url: 'images/dell-vostro-1450.jpg',
                 id: 123529
             },
             {
                 value: 'Mi Pad(White, 16 GB, Wi-Fi Only)',
                 amount: 'Rs. 10,999',
                 url: 'images/xiaomi-mi-pad-400x400-imae5hprdszf9frh.jpeg',
                 id: 81887
             }
        ];


        /*
           var data=[
                {
                    value: 'Moto E (2nd Gen) 3G', 
                    "PriceTree_Id": 269289,
                    "Seller_Name": "Flipkart",
                    "Best_Price": "19,999.00",
                    "In_Stock": "Yes",
                    "Product_Name": "Moto X Play (Black, 32GB)",
                    "Product_Color": "",
                    "Uri": "http://dl.flipkart.com/dl/moto-x-play/p/itmeajtqyhrnkwrz?pid=MOBEAJTQWXAQH9KQ"
                },
                {
                    "PriceTree_Id": 269289,
                    "Seller_Name": "Ebay.In",
                    "Best_Price": "21,990.00",
                    "In_Stock": "Yes",
                    "Product_Name": "Brand New MOTO X Play 32GB - Black Facoty Sealed Box",
                    "Product_Color": "",
                    "Uri": "http://www.ebay.in/itm/Brand-New-MOTO-X-Play-32GB-Black-Facoty-Sealed-Box-/231798461463?hash=item35f843d417:g:5ioAAOSwSHZWg-YS"
                }               
            ];
            */
        $('#autocomplete').autocomplete({
            lookup: data,
            onSelect: function (suggestion) {
                var ID = suggestion.id;
                renderTemplates(ID);
                renderTemplatesDescription(ID);
                $('#banner').hide();
                var thehtml = "<img src=" + suggestion.url +">";              
                $('#outputcontent').html(thehtml);                
            }
        });
    });


});

