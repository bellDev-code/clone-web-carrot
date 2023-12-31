import React from 'react';
import { AdressButton } from './styles';

interface PostcodeProps {
    onAddressChange: (address: string) => void;
}

interface CustomWindow extends Window {
    daum: any; // daum의 타입에 맞게 수정해야 합니다.
}
  
declare const window: CustomWindow;

interface DaumPostcodeData {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
}
  
const Postcode = ({ onAddressChange }: PostcodeProps) => {
    const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = '';
    
    if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
    
        onAddressChange(fullAddress);
        };
    
        const handleClick = () => {
        new window.daum.Postcode({
            oncomplete: handleComplete,
        }).open();
        };
    
        return (
        <AdressButton type='button' onClick={handleClick}>
            동네입력
        </AdressButton>
        );
    };
    
export default Postcode;