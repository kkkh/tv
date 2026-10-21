import './SiteFooter.css'

/**
 * 网站底部备案信息（纯新增组件，不依赖、不影响任何现有逻辑）
 *
 * 合规要点：
 * 1. ICP 备案号链接至工业和信息化部备案管理系统；
 * 2. 公安联网备案号前方展示官方 20×20 徽标（public/beian.png），
 *    并链接至全国互联网安全管理服务平台对应查询页；
 * 3. 两个备案号在页面底部居中、常显，文字不隐藏、不截断，支持键盘聚焦。
 */

/** ICP 备案号（工信部备案管理系统） */
const ICP_BEIAN = '晋ICP备2023020746号-2'
const ICP_BEIAN_URL = 'https://beian.miit.gov.cn/'

/** 公安联网备案号（全国互联网安全管理服务平台） */
const POLICE_BEIAN = '晋公网安备14010602111139号'
const POLICE_BEIAN_CODE = '14010602111139'
const POLICE_BEIAN_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_BEIAN_CODE}`

/** 官方公安备案徽标；带 BASE_URL 前缀，子路径部署时同样可访问 */
const POLICE_BEIAN_ICON = `${import.meta.env.BASE_URL}beian.png`

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      aria-label="网站备案信息"
      data-site-footer="true"
      className="border-border/60 text-muted-foreground mt-8 flex flex-col flex-wrap items-center justify-center gap-x-3 gap-y-1.5 border-t pt-5 pb-3 text-center text-xs leading-5 sm:flex-row"
    >
      <a
        href={ICP_BEIAN_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="工业和信息化部 ICP/IP地址/域名信息备案管理系统"
        className="hover:text-foreground focus-visible:ring-ring/50 rounded-sm transition-colors duration-200 outline-none focus-visible:ring-[3px]"
      >
        {ICP_BEIAN}
      </a>

      <span aria-hidden="true" className="bg-border hidden h-3 w-px sm:block" />

      <a
        href={POLICE_BEIAN_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="全国互联网安全管理服务平台"
        className="hover:text-foreground focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-sm transition-colors duration-200 outline-none focus-visible:ring-[3px]"
      >
        <img
          src={POLICE_BEIAN_ICON}
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          decoding="async"
          className="size-5 shrink-0"
        />
        <span>{POLICE_BEIAN}</span>
      </a>
    </footer>
  )
}
