/**
 * this is an example of different nodes
 * words wrapped with ~~NODE~~ is the effect part
 */
/**
 * 不同ast节点类型的示例, 被~~节点~~括起来的部分为实际起作用的节点类型
 */
/**
 * 参考: https://juejin.cn/post/6844903798347939853
 */

const ArrayExpression = "const a = ~~[]~~";
const ArrayPattern = "const ~~[ a, b ]~~ = [ 1, 2 ]";
const ArrowFunctionExpression = "const a = ~~() => {}~~";
const AssignmentExpression = "let a; ~~a = 1~~";
const AssignmentPattern = "const [a, ~~b = 4~~] = [1,3]";
const AwaitExpression = "async function a() { const b = ~~await a()~~ }";
const BigIntLiteral = "const a = ~~123123n~~";
const BinaryExpression = "const a = ~~a + 1~~";
const BlockStatement = "~~{ }~~";
const BreakStatement = "switch(a){ case '1': ~~break~~; }";
const CallExpression = "~~a()~~";
const CatchClause = "try{}~~catch(e){}~~";
const ChainExpression = "~~a?.a~~"; // 可选链
const ClassBody = "class Test ~~{}~~";
const ClassDeclaration = "~~class Test {}~~";
const ClassExpression = "const a = ~~class {}~~";
const ConditionalExpression = "const a = ~~b ? c : d~~";
const ContinueStatement = "for(let i = 0; i < 1; i++){ ~~continue~~ }";
const DebuggerStatement = "~~debugger~~";
const Decorator = "~~@component~~ const a = 1";
const DoWhileStatement = "~~do {} while(1)~~";
const EmptyStatement = "~~;~~";
const ExportAllDeclaration = "~~export * from ''~~";
const ExportDefaultDeclaration = "~~export default ''~~";
const ExportNamedDeclaration = "~~export const a~~";
const ExportSpecifier = "export { ~~a~~ } from ''";
const ExpressionStatement = "~~a = 1~~" || "~~(function () {})~~";
const ForInStatement = "~~for(let a in 3) {}~~";
const ForOfStatement = "~~for(let a of []) {}~~";
const ForStatement = "~~for(let a = 0; a < 1; a++) {}~~";
const FunctionDeclaration = "~~function a() {}~~";
const FunctionExpression = "const a = ~~function() {}~~";
const Identifier = "const ~~a~~ = 1"; // 任何标识符, 如变量名,属性名,函数名
const IfStatement = "~~if(a) {}~~";
const ImportDeclaration = "~~import a from ''~~";
const ImportDefaultSpecifier = "import ~~a~~ from ''";
const ImportExpression = "~~import('')~~";
const ImportNamespaceSpecifier = "import ~~* as a~~ from ''";
const ImportSpecifier = "import { ~~a~~ } from ''";
const JSXAttribute = "const a = <a ~~name=''~~></a>";
const JSXClosingElement = "const a = <a name=''>~~</a>~~";
const JSXClosingFragment = "const a = <><Foo />~~</>~~";
const JSXElement = "const a = ~~<a></a>~~" || "const a = ~~<a />~~";
const JSXEmptyExpression = "const a = <a>{~~ ~~}</a>";
const JSXExpressionContainer = "const a = <a>~~{ }~~</a>";
const JSXFragment = "const a = ~~<></>~~";
const JSXIdentifier = "const a = <~~a~~ ~~a~~=''></~~a~~>";
const JSXMemberExpression = "const a = <~~A.a~~></~~A.a~~>";
const JSXOpeningElement = "const a = ~~<a>~~</a>";
const JSXOpeningFragment = "const a = ~~<>~~</>";
const JSXSpreadAttribute = "const a = <a ~~{...a}~~></a>";
const JSXSpreadChild = "const a = <a>~~{...a}~~</a>";
const JSXText = "const a = <a>~~text~~</a>";
const LabeledStatement = "~~label:a~~";
const Literal = "~~1~~"; // 字面量
const LogicalExpression = "~~a && b~~" || "~~a || b~~";
const MemberExpression = "~~a.a~~";
const MetaProperty = "~~new.target~~" || "~~import.meta~~";
const MethodDefinition = "class Test { ~~a(){ }~~ }";
const NewExpression = "~~new Test()~~";
const ObjectExpression = "const a = ~~{}~~";
const ObjectPattern = "const ~~{ a, b }~~ = { a: 1, b: 2}";
const Program = { sourceType: "script" || "module", body: [] }; // 表示完整源码树
const Property = "const a = { ~~a: 1~~ }";
const PropertyDefinition = "class Test { ~~a = 1~~ }";
const RestElement = "const [ a, b, ~~...c~~ ] = [ 1, 2, 3, 4 ]";
const ReturnStatement = "~~return~~";
const SequenceExpression = "~~a,b~~" || "~~a=1, b=2~~";
const SpreadElement = "const a = [ 1, ~~...b~~ ]" || "const a = { a: 1, ~~...b~~ }";
const Super = "class bar extends foo { constructor() { ~super~~() } }";
const SwitchCase = "switch(a){ ~~case '1': break;~~ ~~default:~~ }";
const SwitchStatement = "~~switch(a){ case '1': break; default: }~~";
const TaggedTemplateExpression = "~~foo`test`~~";
const TemplateElement = "foo`~~test~~`";
const TemplateLiteral = "foo~~`test`~~";
const ThisExpression = "~~this~~";
const ThrowStatement = "~~throw new Error~~";
const TryStatement = "~~try{}catch(e){}~~";
const TSAbstractKeyword = "~~abstract~~ class Test { }"; // NOTE not sure
const TSAbstractMethodDefinition = "abstract class Test { ~~public abstract a(): void~~ }";
const TSAbstractPropertyDefinition = "abstract class Test { ~~public abstract a: number~~ }";
const TSAnyKeyword = "let a: ~~any~~";
const TSArrayType = "let a: ~~string[]~~";
const TSAsExpression = "let a = ~~'' as number~~";
const TSAsyncKeyword = ""; // NOTE
const TSBigIntKeyword = "let a: ~~bigint~~";
const TSBooleanKeyword = "let a: ~~boolean~~";
const TSCallSignatureDeclaration = "type Greet = { ~~(name: string): void~~ }";
const TSClassImplements = ""; // NOTE
const TSConditionalType = "type A<T, U> = ~~T extends U ? true : false~~";
const TSConstructorType = ""; // NOTE
const TSConstructSignatureDeclaration = "";
const TSDeclareFunction = "";
const TSDeclareKeyword = "";
const TSEmptyBodyFunctionExpression = "";
const TSEnumDeclaration = "";
const TSEnumMember = "";
const TSExportAssignment = "";
const TSExportKeyword = "";
const TSExternalModuleReference = "";
const TSFunctionType = "";
const TSImportEqualsDeclaration = "";
const TSImportType = "";
const TSIndexedAccessType = "";
const TSIndexSignature = "";
const TSInferType = "";
const TSInterfaceBody = "";
const TSInterfaceDeclaration = "";
const TSInterfaceHeritage = "";
const TSIntersectionType = "";
const TSLiteralType = "";
const TSMappedType = "";
const TSMethodSignature = "";
const TSModuleBlock = "";
const TSModuleDeclaration = "";
const TSNamespaceExportDeclaration = "";
const TSNeverKeyword = "";
const TSNonNullExpression = "";
const TSNullKeyword = "";
const TSNumberKeyword = "";
const TSObjectKeyword = "";
const TSOptionalType = "";
const TSParameterProperty = "";
const TSPrivateKeyword = "";
const TSPropertySignature = "";
const TSProtectedKeyword = "";
const TSPublicKeyword = "";
const TSQualifiedName = "";
const TSReadonlyKeyword = "";
const TSRestType = "";
const TSStaticKeyword = "";
const TSStringKeyword = "";
const TSSymbolKeyword = "";
const TSThisType = "";
const TSTupleType = "";
const TSTypeAliasDeclaration = "";
const TSTypeAnnotation = "";
const TSTypeAssertion = "";
const TSTypeLiteral = "";
const TSTypeOperator = "";
const TSTypeParameter = "";
const TSTypeParameterDeclaration = "";
const TSTypeParameterInstantiation = "";
const TSTypePredicate = "";
const TSTypeQuery = "";
const TSTypeReference = "";
const TSUndefinedKeyword = "";
const TSUnionType = "";
const TSUnknownKeyword = "";
const TSVoidKeyword = "";
const UnaryExpression = "~~!a~~" || "~~typeof~~" || "~~delete~~" || "~~void 0~~";
const UpdateExpression = "~~a++~~" || "~~a--~~";
const VariableDeclaration = "~~let a = 1~~";
const VariableDeclarator = "let ~~a = 1~~";
const WhileStatement = "~~while(1){ }~~";
const WithStatement = "~~with(a){ }~~";
const YieldExpression = "function* gen(x) { var y = ~~yield x + 2~~; return y }";
