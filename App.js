import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import ImagesDemo from './ImagesDemo';


function SellerDetailsTable() {
  const [sellerDetails, setSellerDetails] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    gstNumber: '',
    locationAsPerGST: '',
    productLine: [],
    operateFromIndia: '',
    primarySalesChannel: [],
    sellingLocations: [],
    averageSellingPrice: '',
    brandActiveDuration: [],
    targetAudience: [],
    otherDetails: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setSellerDetails({
          ...sellerDetails,
          [name]: [...sellerDetails[name], value]
        });
      } else {
        setSellerDetails({
          ...sellerDetails,
          [name]: sellerDetails[name].filter(item => item !== value)
        });
      }
    } else {
      setSellerDetails({
        ...sellerDetails,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(sellerDetails); // For demonstration
  };

  return (
    
    <table>
      <tbody>
      <div className="centered-container">
        <div className="image-container">
          <ImagesDemo />
        </div>
      </div>
    <h1 className="form-heading" tabIndex="0">Revogue Marketplace</h1>
      
      <h2>1. Seller Details:</h2>
        <tr>
          <td>First Name:</td>
          <td><input type="text" name="firstName" value={sellerDetails.firstName} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Last Name:</td>
          <td><input type="text" name="lastName" value={sellerDetails.lastName} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Job Title:</td>
          <td><input type="text" name="jobTitle" value={sellerDetails.jobTitle} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Email Address:</td>
          <td><input type="email" name="emailAddress" value={sellerDetails.emailAddress} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td><input type="tel" name="phoneNumber" value={sellerDetails.phoneNumber} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Company Name:</td>
          <td><input type="text" name="companyName" value={sellerDetails.companyName} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>GST Number:</td>
          <td><input type="text" name="gstNumber" value={sellerDetails.gstNumber} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>Location As per GST:</td>
          <td><input type="text" name="locationAsPerGST" value={sellerDetails.locationAsPerGST} onChange={handleChange} /></td>
        </tr>
      </tbody>
      <h2>2. What is the main product line that you sell? *</h2>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Clothing & Fashion</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} /> Handbags & Accessories </label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Home Textiles</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Jewellery</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Foot Wear</label><br/>
      <label><input type="checkbox" name="productLine" id="otherProductLine" onchange="toggleOtherInput()" onChange={handleChange} /> Other - Write In (Required) </label><br/>
      
      
      
      {/* Repeat similar structure for other product lines */}

      <h2>3. Do you operate and fulfill your products from India? *</h2>
      <label><input type="checkbox" name="operateFromIndia" value="Yes" onChange={handleChange} />Yes</label><br/>
      <label><input type="checkbox" name="operateFromIndia" value="No" onChange={handleChange} />No</label><br/>

      <h2>4. What is your primary sales channel? *</h2>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Online Store</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Marketplaces</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Retail Store</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} />Wholesale / Distribution</label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} /> Social Platforms - Write In _________ </label><br/>
      <label><input type="text" id="Social Platforms" name="Social Platforms" required onChange={handleChange} /></label><br/>
      <label><input type="checkbox" name="productLine" value="Clothing & Fashion" onChange={handleChange} /> Other -_________ Where are you selling* </label><br/>
      <h2>5. Where are you Selling?</h2>
      <label><input type="checkbox" name="sellingLocations" value="On my own website" onChange={handleChange} />On my own website</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Amazon" onChange={handleChange} />Amazon</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Flipkart" onChange={handleChange} />Flipkart</label><br/>
      <label> <input type="checkbox" name="sellingLocations" value="Myntra" onChange={handleChange} />Myntra</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Ajio"onChange={handleChange} />Ajio</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Nykaa" onChange={handleChange} />Nykaa</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Facebook" onChange={handleChange} />Facebook</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Instagram" onChange={handleChange} />Instagram</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="WhatsApp" onChange={handleChange} />WhatsApp</label><br/>
      <label><input type="checkbox" name="sellingLocations" value="Other marketplace" onChange={handleChange} /> Other marketplace </label><br/>
      <h2>6. What is the Average Selling Price for the brand? *</h2>
      <label> <input type="text" id="averageSellingPrice" name="averageSellingPrice" required onChange={handleChange} /></label><br/>

      <h2>7. What is the main product line that you sell? *</h2>
      <label><input type="checkbox" name="brandActiveDuration" value="Less than 6 months" onChange={handleChange} />Less than 6 months</label><br/>
      <label><input type="checkbox" name="brandActiveDuration" value="1-2 years" onChange={handleChange} />1-2 years</label><br/>
      <label> <input type="checkbox" name="brandActiveDuration" value="2+ years" onChange={handleChange} />2+ years</label><br/>
      <label><input type="checkbox" name="brandActiveDuration" value="5+ years" onChange={handleChange} />5+ years</label><br/>
      <h2>8. What is the target audience for your brand? *</h2>
      <label><input type="checkbox" name="targetAudience" value="0-3 years" onChange={handleChange} /> 0-3 years</label> <br/>
      <label><input type="checkbox" name="targetAudience" value="3-5 years" onChange={handleChange} />3-5 years</label><br/>
      <label><input type="checkbox" name="targetAudience" value="5+ years" onChange={handleChange} />5+ years</label><br/>
      <label><input type="checkbox" name="targetAudience" value="18-25 years" onChange={handleChange} />18-25 years</label><br/>
      <label><input type="checkbox" name="targetAudience" value="25-35 years" onChange={handleChange} />25-35 years</label><br/>
      <label><input type="checkbox" name="targetAudience" value="35-45 years" onChange={handleChange} />35-45 years</label><br/>
      <label><input type="checkbox" name="targetAudience" value="45+ years" onChange={handleChange} />45+ years</label><br/>
      <label><input type="checkbox" name="targetAudience" id="otherAudienceCheckbox" onchange="toggleOtherAudience()" onChange={handleChange} />Other:_</label><br/>
      
      {/* Repeat similar structure for other questions */}
      <label for=""><h2>9. Any other detail you want to share with us.</h2></label><br/>
      <label><textarea name="otherDetails" id="otherDetails" cols="40" rows="5"></textarea></label><br/>
      <h2>10. Please take a few moments to review REVOGUE's Seller Privacy Notice:<b><a href="https://example.com/privacy_policy"
                    target="_blank">Policy Link to prepare</a></b></h2>


<button type="submit">Submit</button>
    </table>
    
  );
}

export default SellerDetailsTable;