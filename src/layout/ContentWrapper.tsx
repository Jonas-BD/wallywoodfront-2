type ContentWrapperProps = {
  children?: React.ReactNode
  pageTitle: string
}

export const ContentWrapper = ({ children, pageTitle }: ContentWrapperProps) => {
  return (
    <div>
        <title>{pageTitle}</title>
        {children}
    </div>
  )
}
