import localFont from 'next/font/local'
import { Sedgwick_Ave_Display } from 'next/font/google'

const satoshi = localFont({
  src: [
    {
      path: 'satoshi/Satoshi-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: 'satoshi/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'satoshi/Satoshi-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: 'satoshi/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: 'satoshi/Satoshi-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: 'satoshi/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: 'satoshi/Satoshi-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: 'satoshi/Satoshi-Variable.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: 'satoshi/Satoshi-VariableItalic.ttf',
      weight: '800',
      style: 'italic'
    },
    {
      path: 'satoshi/Satoshi-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: 'satoshi/Satoshi-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-satoshi',
  // subsets: ["latin"],
  display: 'swap',
  preload: true
})

const sedwidk = Sedgwick_Ave_Display({
  subsets: ['latin'],
  weight: '400'
})

export { satoshi, sedwidk }
