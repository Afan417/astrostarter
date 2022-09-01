import Button from '../components/Button.jsx'

export default function HeaderSection() {
  return (
    <div className="container py-8">
      <p className="mb-4">Hi this is a header section with a button</p>

      {/* Button Example */}
      <Button>I am a button</Button>
    </div>
  )
}
