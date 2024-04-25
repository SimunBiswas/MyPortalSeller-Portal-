import React from "react";

const ShopCategory = ({
  filterItem,
  setItems,
  menuItem,
  setProducts,
  selectedCategory,
}) => {
  return (
   <div class="facets" id="facets">
   <div class="facet-arwup facet-typehead " aria-label="Refine By" tabindex="0" role="button"><strong>Refine By</strong></div>
   <div class="facet-typebody">
      <ul class="rilrtl-list ">
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="gender">gender</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="genderfilter" id="Women" value="Women"/><label class="facet-linkname facet-linkname-genderfilter facet-linkname-Women" for="Women">Women (105,016)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="genderfilter" id="Men" value="Men"/><label class="facet-linkname facet-linkname-genderfilter facet-linkname-Men" for="Men">Men (27,381)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="genderfilter" id="Boys" value="Boys"/><label class="facet-linkname facet-linkname-genderfilter facet-linkname-Boys" for="Boys">Boys (10,180)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="genderfilter" id="Girls" value="Girls"/><label class="facet-linkname facet-linkname-genderfilter facet-linkname-Girls" for="Girls">Girls (4,800)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="genderfilter" id="Infants" value="Infants"/><label class="facet-linkname facet-linkname-genderfilter facet-linkname-Infants" for="Infants">Infants (504)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-genderfilter" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="category">category</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="l1l3nestedcategory" id="Girls - Kurtas &amp; Kurtis" value="Girls - Kurtas &amp; Kurtis"/><label class="facet-linkname facet-linkname-l1l3nestedcategory facet-linkname-Girls - Kurtas &amp; Kurtis" for="Girls - Kurtas &amp; Kurtis">Kurtas &amp; Kurtis (47,984)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="l1l3nestedcategory" id="Women - Kurta Suit Sets" value="Women - Kurta Suit Sets"/><label class="facet-linkname facet-linkname-l1l3nestedcategory facet-linkname-Women - Kurta Suit Sets" for="Women - Kurta Suit Sets">Kurta Suit Sets (45,035)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="l1l3nestedcategory" id="Men - Kurtas &amp; Shirts" value="Men - Kurtas &amp; Shirts"/><label class="facet-linkname facet-linkname-l1l3nestedcategory facet-linkname-Men - Kurtas &amp; Shirts" for="Men - Kurtas &amp; Shirts">Kurtas &amp; Shirts (16,382)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="l1l3nestedcategory" id="Boys - Shorts &amp; 3/4ths" value="Boys - Shorts &amp; 3/4ths"/><label class="facet-linkname facet-linkname-l1l3nestedcategory facet-linkname-Boys - Shorts &amp; 3/4ths" for="Boys - Shorts &amp; 3/4ths">Shorts &amp; 3/4ths (14,476)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="l1l3nestedcategory" id="Boys - Shorts" value="Boys - Shorts"/><label class="facet-linkname facet-linkname-l1l3nestedcategory facet-linkname-Boys - Shorts" for="Boys - Shorts">Shorts (8,679)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-l1l3nestedcategory" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="price">price</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="pricerange" id="Below Rs.500" value="Below Rs.500"/><label class="facet-linkname facet-linkname-pricerange facet-linkname-Below Rs.500" for="Below Rs.500">Below Rs.500 (15,277)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="pricerange" id="Rs.500-1000" value="Rs.500-1000"/><label class="facet-linkname facet-linkname-pricerange facet-linkname-Rs.500-1000" for="Rs.500-1000">Rs.500-1000 (59,487)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="pricerange" id="Rs.1001-1500" value="Rs.1001-1500"/><label class="facet-linkname facet-linkname-pricerange facet-linkname-Rs.1001-1500" for="Rs.1001-1500">Rs.1001-1500 (32,428)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="pricerange" id="Rs.1501-2000" value="Rs.1501-2000"/><label class="facet-linkname facet-linkname-pricerange facet-linkname-Rs.1501-2000" for="Rs.1501-2000">Rs.1501-2000 (18,955)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="pricerange" id="Rs.2001-2500" value="Rs.2001-2500"/><label class="facet-linkname facet-linkname-pricerange facet-linkname-Rs.2001-2500" for="Rs.2001-2500">Rs.2001-2500 (8,524)</label></div>
                           </div>
                        </li>
                     </ul>
                     <form>
                        <div class="price-container">
                           <div class="input-price-filter">
                              <div class="price-range-title"><span aria-label="Enter Price Range">Enter Price Range</span><span class="clear-all" aria-label="Clear" role="button" tabindex="0">Clear</span></div>
                              <div class="facet-min-price-filter">
                                 <input name="minPrice" type="text" autocomplete="off" id="minPrice" placeholder="Min" maxlength="6" aria-label="Min" value=""/><span class="ic-price-separator"></span><input name="maxPrice" type="text" autocomplete="off" placeholder="Max" id="maxPrice" maxlength="6" aria-label="Max" value=""/><button type="submit" class="rilrtl-button ic-toparw" aria-label="Apply price filter"></button>
                                 <div class="price-error"></div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="brands">brands</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="brand" id="14 FAB" value="14 FAB"/><label class="facet-linkname facet-linkname-brand facet-linkname-14 FAB" for="14 FAB">14 FAB (19)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="brand" id="2BME" value="2BME"/><label class="facet-linkname facet-linkname-brand facet-linkname-2BME" for="2BME">2BME (1)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="brand" id="2Go" value="2Go"/><label class="facet-linkname facet-linkname-brand facet-linkname-2Go" for="2Go">2Go (9)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="brand" id="3" value="3"/><label class="facet-linkname facet-linkname-brand facet-linkname-3" for="3">3 (20)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="brand" id="3pin" value="3pin"/><label class="facet-linkname facet-linkname-brand facet-linkname-3pin" for="3pin">3pin (3)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-brand" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="occasion">occasion</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="occasion" id="Active" value="Active"/><label class="facet-linkname facet-linkname-occasion facet-linkname-Active" for="Active">Active (3,765)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="occasion" id="Casual" value="Casual"/><label class="facet-linkname facet-linkname-occasion facet-linkname-Casual" for="Casual">Casual (89,361)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="occasion" id="CASUAL" value="CASUAL"/><label class="facet-linkname facet-linkname-occasion facet-linkname-CASUAL" for="CASUAL">CASUAL (104)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="occasion" id="Evening" value="Evening"/><label class="facet-linkname facet-linkname-occasion facet-linkname-Evening" for="Evening">Evening (5,935)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="occasion" id="Occasion" value="Occasion"/><label class="facet-linkname facet-linkname-occasion facet-linkname-Occasion" for="Occasion">Occasion (35,218)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-occasion" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="discount">discount</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="discount" id="0-20%" value="0-20%"/><label class="facet-linkname facet-linkname-discount facet-linkname-0-20%" for="0-20%">0-20% (24,407)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="discount" id="21-30%" value="21-30%"/><label class="facet-linkname facet-linkname-discount facet-linkname-21-30%" for="21-30%">21-30% (6,057)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="discount" id="31-40%" value="31-40%"/><label class="facet-linkname facet-linkname-discount facet-linkname-31-40%" for="31-40%">31-40% (8,315)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="discount" id="41-50%" value="41-50%"/><label class="facet-linkname facet-linkname-discount facet-linkname-41-50%" for="41-50%">41-50% (23,090)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="discount" id="51-80%" value="51-80%"/><label class="facet-linkname facet-linkname-discount facet-linkname-51-80%" for="51-80%">51-80% (82,875)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-discount" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="colors">colors</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalcolorfamily" id="Aqua" value="Aqua"/><label class="facet-linkname facet-linkname-verticalcolorfamily facet-linkname-Aqua" for="Aqua"><i class="facet-checkbox-color-outer"><i class="facet-checkbox-color-inner" style={{ backgroundColor: 'rgb(0, 255, 255)' }}></i></i>Aqua (972)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalcolorfamily" id="Beige" value="Beige"/><label class="facet-linkname facet-linkname-verticalcolorfamily facet-linkname-Beige" for="Beige"><i class="facet-checkbox-color-outer"><i class="facet-checkbox-color-inner" style={{ backgroundColor: 'rgb(245, 241, 222)' }}></i></i>Beige (3,689)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalcolorfamily" id="Black" value="Black"/><label class="facet-linkname facet-linkname-verticalcolorfamily facet-linkname-Black" for="Black"><i class="facet-checkbox-color-outer"><i class="facet-checkbox-color-inner" style={{ backgroundColor: 'rgb(0, 0, 0)' }}></i></i>Black (12,047)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalcolorfamily" id="Blue" value="Blue"/><label class="facet-linkname facet-linkname-verticalcolorfamily facet-linkname-Blue" for="Blue"><i class="facet-checkbox-color-outer"><i class="facet-checkbox-color-inner" style={{ backgroundColor: 'rgb(0, 96, 255)' }}></i></i>Blue (18,919)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalcolorfamily" id="Bronze" value="Bronze"/><label class="facet-linkname facet-linkname-verticalcolorfamily facet-linkname-Bronze" for="Bronze"><i class="facet-checkbox-color-outer"><i class="facet-checkbox-color-inner" style={{ backgroundColor: 'rgb(205, 127, 50)' }}></i></i>Bronze (41)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-verticalcolorfamily" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="size &amp; fit">size &amp; fit</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <div class="facet-size-fit-category-description" aria-label="For better results, select gender and category">For better results,<span class="select-category-text" role="button" tabindex="0"> select gender and category</span></div>
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalsizegroupformat" id="M" value="M"/><label class="facet-linkname facet-linkname-verticalsizegroupformat facet-linkname-M" for="M">M (85,512)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalsizegroupformat" id="L" value="L"/><label class="facet-linkname facet-linkname-verticalsizegroupformat facet-linkname-L" for="L">L (84,102)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalsizegroupformat" id="XL" value="XL"/><label class="facet-linkname facet-linkname-verticalsizegroupformat facet-linkname-XL" for="XL">XL (81,835)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalsizegroupformat" id="XXL" value="XXL"/><label class="facet-linkname facet-linkname-verticalsizegroupformat facet-linkname-XXL" for="XXL">XXL (72,803)</label></div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead"><input type="checkbox" name="verticalsizegroupformat" id="S" value="S"/><label class="facet-linkname facet-linkname-verticalsizegroupformat facet-linkname-S" for="S">S (71,400)</label></div>
                           </div>
                        </li>
                     </ul>
                     <div id="verticalsizegroupformat-verticalsizegroupformat" class="facet-more" aria-label="MORE" role="button" tabindex="0"><strong>MORE</strong></div>
                  </div>
               </div>
            </div>
         </li>
         <li class="rilrtl-list-item">
            <div>
               <div class="cat-facets ">
                  <div class="facet-head facet-xpndicon" tabindex="0" role="button">
                     <span class="ic-unselected-facet"></span><span class="facet-left-pane-label" aria-label="rating">rating</span>
                     <div class="facet-slctclr">
                        <div class="facet-slct" aria-label="Select All" role="button" tabindex="0">Select All</div>
                        |
                        <div class="facet-clr" aria-label="Clear All" role="button" tabindex="0">Clear All</div>
                     </div>
                  </div>
                  <div class="facet-body">
                     <ul class="rilrtl-list ">
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead">
                                 <input type="radio" name="rating" id="1 star &amp; above" value="1 star &amp; above"/>
                                 <label class="facet-linkname-rating facet-linkname-rating facet-linkname-1 star &amp; above" for="1 star &amp; above">
                                    <span style={{display: 'flex', height: '15px', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'rgb(32, 32, 32)', marginRight: '5px', marginBottom: '6px'}}>
                                       <p>1 </p>
                                       <img src="https://assets.ajio.com/static/img/filled_star_rating.svg" alt="Star selected" style={{width: "12px"}}/>
                                       <p> &amp; above</p>
                                    </span>
                                    (69,770)
                                 </label>
                              </div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead">
                                 <input type="radio" name="rating" id="2 star &amp; above" value="2 star &amp; above"/>
                                 <label class="facet-linkname-rating facet-linkname-rating facet-linkname-2 star &amp; above" for="2 star &amp; above">
                                    <span style={{display: 'flex', height: '15px', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'rgb(32, 32, 32)', marginRight: '5px', marginBottom: '6px;'}}>
                                       <p>2 </p>
                                       <img src="https://assets.ajio.com/static/img/filled_star_rating.svg" alt="Star selected" style={{width: "12px;"}}/>
                                       <p> &amp; above</p>
                                    </span>
                                    (64,947)
                                 </label>
                              </div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead">
                                 <input type="radio" name="rating" id="3 star &amp; above" value="3 star &amp; above"/>
                                 <label class="facet-linkname-rating facet-linkname-rating facet-linkname-3 star &amp; above" for="3 star &amp; above">
                                    <span style={{display: 'flex', height: '15px', alignItems: 'center', gap: '4px' ,fontSize: '14px', color: 'rgb(32, 32, 32)', marginRight: '5px', marginBottom: '6px'}}>
                                       <p>3 </p>
                                       <img src="https://assets.ajio.com/static/img/filled_star_rating.svg" alt="Star selected" style={{width: "12px"}}/>
                                       <p> &amp; above</p>
                                    </span>
                                    (56,581)
                                 </label>
                              </div>
                           </div>
                        </li>
                        <li class="rilrtl-list-item">
                           <div class="facet-linkfref " role="button" tabindex="0">
                              <div class="facet-linkhead">
                                 <input type="radio" name="rating" id="4 star &amp; above" value="4 star &amp; above"/>
                                 <label class="facet-linkname-rating facet-linkname-rating facet-linkname-4 star &amp; above" for="4 star &amp; above">
                                    <span style={{display: 'flex', height: '15px', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'rgb(32, 32, 32)', marginRight: '5px', marginBottom: '6px;'}}>
                                       <p>4 </p>
                                       <img src="https://assets.ajio.com/static/img/filled_star_rating.svg" alt="Star selected" style={{width: "12px;"}}/>
                                       <p> &amp; above</p>
                                    </span>
                                    (24,591)
                                 </label>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </li>
      </ul>
      <div>
         <div>
            <div class="facet-typehead facet-arwup" aria-label="More Filters" role="button" tabindex="0"><strong>More Filters</strong></div>
            <div>
               <div class="facet-advanced-filter-description" aria-label="Please select upto 3 categories to view more filters">Please select upto 3 categories to view more filters</div>
               <div class="rilrtl-button rilrtl-button--select-category" aria-label="Select Category" role="button" tabindex="0"><strong>Select Category</strong></div>
            </div>
         </div>
      </div>
   </div>
   <div id="lastChild"></div>
</div>
  );
};

export default ShopCategory;
