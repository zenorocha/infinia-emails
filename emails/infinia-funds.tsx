import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Button } from '@react-email/button';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Link } from '@react-email/link';
import * as React from 'react';

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
    <Html>
      <Head />
      <Preview>You have received $100 in funds from Infinia</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={155} src={`${baseUrl}/static/logo.png`} />
          </Section>
          <div style={sectionsBorders}>
            <Section style={sectionBorder} />
            <Section style={sectionCenter} />
            <Section style={sectionBorder} />
          </div>
          <Section style={content}>
            <Text style={paragraph}>Hi John,</Text>
            <Text style={paragraph}>
              You have received $100 in funds from Infinia.
            </Text>
            <Button style={button} href="https://infiniaweb.com">
              Go to Infinia
            </Button>
            <Text style={paragraph}>
              Have questions? Please contact{' '}
              <Link href="info@infiniaweb.com" style={link}>
                Infinia Support
              </Link>
            </Text>
            <Text style={paragraph}>
              Thanks,
              <br />
              Infinia Support Team
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <div style={iconsSocial}>
            <Link href="https://api.whatsapp.com/send?phone=59899622981">
              <Img width={40} height={40} src={`${baseUrl}/static/whatsapp.png`} />
            </Link>
            <Link href="https://www.instagram.com/infinia.tech/">
              <Img width={40} height={40} src={`${baseUrl}/static/instagram.png`} />
            </Link>
            <Link href="https://www.facebook.com/people/Ur-banking-Fintech/100075711214385/">
              <Img width={40} height={40} src={`${baseUrl}/static/facebook.png`} />
            </Link>
          </div>
          <Text style={{ textAlign: 'center', color: '#706a7b' }}>
            © 2023 Infinia, All Rights Reserved
          </Text>
        </Section>
      </Section>
    </Html>
  );
}

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const button = {
  fontFamily,
  backgroundColor: '#00ccff',
  borderRadius: '9999px',
  color: '#fff',
  fontSize: '14px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};

const footer = {
  width: '580px',
  margin: '0 auto',
};

const content = {
  padding: '5px 50px 10px 60px',
};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
};

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '1px solid #00ccff',
  width: '102px',
};

const iconsSocial = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 15,
};

const link = {
  textDecoration: 'underline',
};