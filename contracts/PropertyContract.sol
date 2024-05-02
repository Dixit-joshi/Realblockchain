// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;
contract PropertyContract {
    struct Property {
        uint living_area;
        uint bedrooms;
        uint bathrooms;
        bool furnishings;
        bool parking;
    }

    mapping(address => Property) public properties;

    function setProperty(
        uint _living_area,
        uint _bedrooms,
        uint _bathrooms,
        bool _furnishings,
        bool _parking
    ) public {
        properties[msg.sender] = Property(
            _living_area,
            _bedrooms,
            _bathrooms,
            _furnishings,
            _parking
        );
    }

    function getProperty() public view returns (Property memory) {
        return properties[msg.sender];
    }
}
