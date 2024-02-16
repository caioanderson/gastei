import React from 'react';
import { BackdropCategory, Category, Container, FlexRow, Name, Value, WrapperInfo,Date, BackdropContainer, BackdropContainerColor } from './styles';
import { DebitValueType } from '../../NewDebit';
import { formmatNumber } from '../../../constants/format-number';
import { View } from 'react-native';

type ResumeCardProps = {
  account : DebitValueType;
}

export function ResumeCard({ account }: ResumeCardProps) {
  return (
    <Container>
      <WrapperInfo>
        <Name>{account.name}</Name>
        <Value>{formmatNumber(account.value)}</Value>
        <FlexRow>
          <BackdropCategory>
            <Category>{account.category.label}</Category>
          </BackdropCategory>
          <Date>{String(account.day_payment)}</Date>
        </FlexRow>
      </WrapperInfo>

      <BackdropContainer>
          <BackdropContainerColor />
      </BackdropContainer>
    </Container>
  );
}