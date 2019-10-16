< table class = "table" >
    <
    thead >
    <
    tr class = "item-row" >
    <
    th > Item < /th> <
    th > Price < /th> <
    th > Quantity < /th> <
    th > Total < /th> <
    /tr> <
    /thead> <
    tbody >
    <
    tr id = "hiderow" >
    <
    td colspan = "4" >
    <
    a id = "addRow"
href = "javascript:;"
title = "Add a row"
class = "btn btn-primary" > Add a row < /a> <
    /td> <
    /tr>
    <!-- Here should be the item row -->
    <!--<tr class="item-row">
    <
    td > < input class = "form-control item"
placeholder = "Item"
type = "text" > < /td> <
    td > < input class = "form-control price"
placeholder = "Price"
type = "text" > < /td> <
    td > < input class = "form-control qty"
placeholder = "Quantity"
type = "text" > < /td> <
    td > < span class = "total" > 0.00 < /span></td >
    <
    /tr>--> <
    tr >
    <
    td > < /td> <
    td > < /td> <
    td class = "text-right" > < strong > Sub Total < /strong></td >
    <
    td > < span id = "subtotal" > 0.00 < /span></td >
    <
    /tr> <
    tr >
    <
    td > < strong > Total Quantity: < /strong><span id="totalQty" style="color: red; font-weight: bold">0</span > Units < /td> <
    td > < /td> <
    td class = "text-right" > < strong > Discount < /strong></td >
    <
    td > < input class = "form-control"
id = "discount"
value = "0"
type = "text" > < /td> <
    /tr> <
    tr >
    <
    td > < /td> <
    td > < /td> <
    td class = "text-right" > < strong > Shipping < /strong></td >
    <
    td > < input class = "form-control"
id = "shipping"
value = "0"
type = "text" > < /td> <
    /tr> <
    tr >
    <
    td > < /td> <
    td > < /td> <
    td class = "text-right" > < strong > Grand Total < /strong></td >
    <
    td > < span id = "grandTotal" > 0 < /span></td >
    <
    /tr> <
    /tbody> <
    /table>